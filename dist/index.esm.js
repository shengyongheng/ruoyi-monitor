class EventBus {
    constructor() {
        // 使用 Map 存储事件与回调列表
        // key: eventName, value: Set<handler>
        this._events = new Map();
    }

    // 订阅事件
    on(event, handler) {
        if (!this._events.has(event)) {
            this._events.set(event, new Set());
        }
        this._events.get(event).add(handler);
    }

    // 取消订阅
    off(event, handler) {
        if (!this._events.has(event)) return;
        const handlers = this._events.get(event);
        handlers.delete(handler);

        // 若此事件无监听者则自动清理
        if (handlers.size === 0) {
            this._events.delete(event);
        }
    }

    // 发布事件
    emit(event, data) {
        if (!this._events.has(event)) return;
        const handlers = this._events.get(event);

        for (const handler of handlers) {
            handler(data);
        }
    }

    // 一次性订阅
    once(event, handler) {
        const wrapper = (data) => {
            handler(data);
            this.unsubscribe(event, wrapper);
        };
        this.subscribe(event, wrapper);
    }
}

class ConfigManager {
    defaultConfig = {
        appId: '',
        appVersion: '1.0.0',
        debug: false,
        enabled: true,
        reportUrl: '',
        reportStrategy: 'immediate', // immediate batch throttle
        batchSize: 10,
        reportInterval: 10000,
        maxQueueSize: 100,
        sampleRate: 1,
        errorSampleRate: 1,
        performanceSampleRate: 0.1,
        user: {},
        plugins: {},
        hooks: {}
    };

    mergeConfig(userConfig) {
        const merged = { ...this.defaultConfig, ...userConfig };

        // 环境特定配置
        if (typeof window !== 'undefined') {
            merged.reportUrl = merged.reportUrl || '/monitoring/report';
        }

        // 验证必要配置
        this.validateConfig(merged);

        return merged;
    }

    validateConfig(config) {
        if (!config.appId) {
            throw new Error('appId is required');
        }

        if (config.sampleRate < 0 || config.sampleRate > 1) {
            throw new Error('sampleRate must be between 0 and 1');
        }
    }
}

// 数据上报层 - 上报管理器

class DataReporter {
    // private queue: MonitoringEvent[] = [];

    constructor(config) {
        this.config = config;
        this.queue = [];
        this.timer = null;
        this.isReporting = false;
    }

    init() { }

    async report(event) {
        // 根据策略处理上报
        switch (this.config.reportStrategy) {
            case 'immediate':
                await this.reportImmediate([event]);
                break;
            case 'batch':
                await this.reportBatch(event);
                break;
            case 'throttle':
                await this.reportThrottle(event);
                break;
        }
    }

    async reportBatch(event) {
        this.queue.push(event);

        // 达到批量大小立即上报
        if (this.queue.length >= this.config.batchSize) {
            await this.flush();
            return;
        }

        // 设置定时上报
        if (!this.timer) {
            this.timer = setTimeout(() => {
                this.flush();
            }, this.config.reportInterval);
        }
    }

    async reportImmediate(events) {
        await this.sendRequest(events);
    }

    async reportThrottle(event) {
        this.queue.push(event);

        if (!this.timer) {
            this.timer = setTimeout(() => {
                this.flush();
            }, this.config.reportInterval);
        }
    }

    async flush() {
        if (this.isReporting || this.queue.length === 0) return;

        this.isReporting = true;
        clearTimeout(this.timer);
        this.timer = null;

        const eventsToReport = [...this.queue];
        this.queue = [];

        try {
            await this.sendRequest(eventsToReport);
        } catch (error) {
            // 上报失败，重新加入队列
            this.queue.unshift(...eventsToReport);

            // 队列超过最大限制，丢弃旧数据
            if (this.queue.length > this.config.maxQueueSize) {
                this.queue = this.queue.slice(0, this.config.maxQueueSize);
            }

            console.error('Report failed:', error);
        } finally {
            this.isReporting = false;
        }
    }

    async sendRequest(events) {
        if (events.length === 0) return;

        const payload = {
            appId: this.config.appId,
            appVersion: this.config.appVersion,
            timestamp: Date.now(),
            events
        };
        console.log("payload:", payload);
        // 使用多种方式上报，提高成功率
        // await Promise.race([
        //     this.sendBeacon(payload),
        //     this.sendFetch(payload),
        //     this.sendXHR(payload)
        // ]);
    }

    async sendBeacon(payload) {
        if (!navigator.sendBeacon) return false;

        const blob = new Blob([JSON.stringify(payload)], {
            type: 'application/json'
        });

        return navigator.sendBeacon(this.config.reportUrl, blob);
    }

    async sendFetch(payload) {
        try {
            const response = await fetch(this.config.reportUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                keepalive: true
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            throw error;
        }
    }

    sendXHR(payload) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', this.config.reportUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve();
                    } else {
                        reject(new Error(`HTTP ${xhr.status}`));
                    }
                }
            };

            xhr.send(JSON.stringify(payload));
        });
    }

    destroy() {
        clearTimeout(this.timer);
        this.flush(); // 销毁前上报剩余数据
    }
}

class MonitoringCore extends EventBus {

    constructor(config = {}) {
        super();
        const configManager = new ConfigManager();
        this.config = configManager.mergeConfig(config);
        this.plugins = new Map();
        this.state = {
            initialized: false,
            enabled: true,
            queue: []
        };
        // this.processor = new DataProcessor(this.config); // 数据处理器
        this.reporter = new DataReporter(this.config); // 上报器
        this.init();
    }

    // 初始化SDK
    init() {
        if (this.state.initialized) return;
        try {
            // 注册内置插件
            // this.registerCorePlugins();

            // 初始化处理器和上报器
            // this.processor.init();
            this.reporter.init();

            // 设置全局错误捕获
            // this.setupGlobalErrorHandling();

            this.state.initialized = true;
            this.emit('sdk:init');
        } catch (error) {
            console.error('SDK initialization failed:', error);
        }
    }

    // 注册插件
    use(plugin) {
        const pluginName = plugin.name;

        if (this.plugins.has(pluginName)) {
            console.warn(`Plugin ${pluginName} already registered`);
            return this;
        }

        try {
            plugin.install(this);
            this.plugins.set(pluginName, plugin);
            this.emit('plugin:registered', { plugin: pluginName });
        } catch (error) {
            console.error(`Failed to register plugin ${pluginName}:`, error);
        }

        return this;
    }

    // 数据采集入口
    capture(eventType, data) {
        if (!this.state.enabled) return;

        const event = {
            eventType,
            timestamp: Date.now(),
            data,
            // sessionId: this.getSessionId(),
            // pageViewId: this.getPageViewId(),
            // userId: this.getUserId()
        };

        // 处理并上报数据
        this.processEvent(event);
    }

    // 处理事件
    async processEvent(event) {
        try {
            // 预处理
            // const processedEvent = await this.processor.process(event);
            const processedEvent = event;

            // 触发插件钩子
            // const finalEvent = await this.triggerPluginHooks('beforeReport', processedEvent);
            const finalEvent = event;

            if (finalEvent !== null) {
                // 添加到队列
                this.state.queue.push(finalEvent);

                // 触发上报
                await this.reporter.report(finalEvent);

                this.emit('event:reported', finalEvent);
            }
        } catch (error) {
            console.error('Event processing failed:', error);
            this.emit('event:error', { event, error });
        }
    }

    // 销毁SDK
    destroy() {
        this.plugins.forEach(plugin => {
            try {
                plugin.uninstall?.();
            } catch (error) {
                console.error(`Plugin ${plugin.name} uninstall failed:`, error);
            }
        });

        this.reporter.destroy();
        // this.processor.destroy();
        this.state.initialized = false;

        this.emit('sdk:destroyed');
    }
}

// 性能监控插件
class PerformancePlugin {
    name = 'performance';

    install(sdk) {
        // 监听性能指标
        this.observePerformance(sdk);
    }

    observePerformance(sdk) {

        if ('PerformanceObserver' in window) {
            // 监听LCP
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];

                sdk.capture('performance', {
                    type: 'lcp',
                    value: lastEntry.renderTime || lastEntry.loadTime
                });
            });

            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }
}

// 用户行为插件
class UserBehaviorPlugin {
    name = 'userBehavior';

    install(sdk) {
        this.trackPageStayTime(sdk);
        // this.trackScrollBehavior(sdk);
    }

    trackPageStayTime(sdk) {

        let enterTime = Date.now();

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                const stayTime = Date.now() - enterTime;
                sdk.capture('userAction', {
                    type: 'pageStay',
                    stayTime
                });
            } else {
                enterTime = Date.now();
            }
        });
    }
}

new MonitoringCore({
    appId: "abc",
})
    .use(new PerformancePlugin())
    .use(new UserBehaviorPlugin());
