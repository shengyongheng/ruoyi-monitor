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
        reportInterval: 10000, // 延迟上报时间 reportStrategy 为 batch throttle 时有效
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

// 环境监控插件
class EnvironmentInfoPlugin {
    name = 'environmentInfo';

    install(sdk) {
        // 浏览器环境
        this.detectBrowserInfo(sdk);
        // 检测操作系统
        this.detectOSInfo(sdk);
        // 检测设备类型
        this.detectDeviceInfo(sdk);
        // 获取地理位置
        this.getGeolocationInfo(sdk);
    }

    // 
    uninstall() {
    }

    detectBrowserInfo(sdk) {
        const ua = navigator.userAgent;
        let browserName = "未知";
        let browserVersion = "未知";
        let engine = "未知";

        // 检测浏览器
        if (ua.includes("Chrome") && !ua.includes("Edg")) {
            browserName = "Chrome";
            const match = ua.match(/Chrome\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Firefox")) {
            browserName = "Firefox";
            const match = ua.match(/Firefox\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
            browserName = "Safari";
            const match = ua.match(/Version\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        } else if (ua.includes("Edg")) {
            browserName = "Edge";
            const match = ua.match(/Edg\/([0-9.]+)/);
            browserVersion = match ? match[1] : "未知";
        }

        // 检测引擎
        if (ua.includes("AppleWebKit")) {
            engine = "WebKit";
        } else if (ua.includes("Gecko")) {
            engine = "Gecko";
        } else if (ua.includes("Trident")) {
            engine = "Trident";
        }

        const data = {
            name: browserName,
            version: browserVersion,
            engine: engine,
        };
        sdk.capture("environmentInfo", {
            type: "browser",
            data
        });
    }

    detectOSInfo(sdk) {
        const ua = navigator.userAgent;
        let os = "未知";

        if (ua.includes("Windows")) {
            os = "Windows";
            if (ua.includes("Windows NT 10.0")) os = "Windows 10/11";
            else if (ua.includes("Windows NT 6.3")) os = "Windows 8.1";
            else if (ua.includes("Windows NT 6.2")) os = "Windows 8";
            else if (ua.includes("Windows NT 6.1")) os = "Windows 7";
        } else if (ua.includes("Mac")) {
            os = "macOS";
        } else if (ua.includes("Linux")) {
            os = "Linux";
        } else if (ua.includes("Android")) {
            os = "Android";
        } else if (
            ua.includes("iOS") ||
            ua.includes("iPhone") ||
            ua.includes("iPad")
        ) {
            os = "iOS";
        }
        sdk.capture("environmentInfo", {
            type: "os",
            data: {
                os
            }
        });
    }

    detectDeviceInfo(sdk) {
        const ua = navigator.userAgent;
        const width = window.innerWidth;
        let device = "";

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            device = "平板";
        } else if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            device = "手机";
        } else if (width < 768) {
            device = "手机 (基于屏幕大小)";
        } else if (width < 834) {
            device = "平板 (基于屏幕大小)";
        } else {
            device = "桌面";
        }
        sdk.capture("environmentInfo", {
            type: "device",
            data: {
                device
            }
        });
    }

    getGeolocationInfo(sdk) {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude, accuracy } = position.coords;

                // 在实际应用中，这里会调用地理编码服务将坐标转换为地址
                const { country, city } = await this.getLocationFromCoords(latitude, longitude);
                sdk.capture("environmentInfo", {
                    type: "geolocation",
                    data: {
                        coordinates: {
                            latitude,
                            longitude,
                            accuracy,
                        },
                        country,
                        city,
                    }
                });
            },
            (error) => {
                let errorMessage = "未知错误";
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "用户拒绝提供地理位置权限";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "无法获取当前位置信息";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "获取位置信息超时";
                        break;
                }

                sdk.capture("environmentInfo", {
                    type: "geolocation",
                    data: {
                        errorMessage
                    }
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000,
            }
        );
    }

    // 根据坐标获取位置信息（模拟）
    getLocationFromCoords(latitude, longitude) {
        // 在实际应用中，这里会调用地理编码API
        // 这里我们使用模拟数据
        return new Promise(() => {
            // this.environmentData.geolocation.country = "中国";
            // this.environmentData.geolocation.city = "北京";

            // document.getElementById("country").textContent = "中国";
            // document.getElementById("city").textContent = "北京";

            // this.logEvent("GEOLOCATION", "位置信息解析完成: 中国, 北京");
            return {
                country: "中国",
                city: "北京"
            }
        })

    }

}

// 错误监控插件
class ErrorTrackingPlugin {
    name = 'errorTracking';
    slowRequestThreshold = 3000; // 慢请求阈值

    install(sdk) {
        {
            // 监听全局错误
            window.addEventListener("error", this.windowErrorTracking.bind(this, sdk), true);
        }
        {
            // 监听未处理的Promise拒绝
            window.addEventListener(
                "unhandledrejection",
                this.unhandledRejectionTracking.bind(this)
            );
        }
        this.xHRErrorTracking(sdk);
        this.fetchErrorTracking(sdk);
    }

    // 
    uninstall() {
        window.removeEventListener("error", this.windowErrorTracking.bind(this, sdk), true);
        window.removeEventListener(
            "unhandledrejection",
            this.unhandledRejectionTracking.bind(this)
        );
        // window.removeEventListener("load", this.resourceErrorTracking.bind(this));
    }

    windowErrorTracking(sdk, event) {
        const { message, filename, lineno, colno, error } = event;

        // 判断错误类型
        let errorType = "js";
        // let severity = "high";

        // 判断是否为资源加载错误
        if (
            event.target &&
            (event.target.tagName === "IMG" ||
                event.target.tagName === "SCRIPT" ||
                event.target.tagName === "LINK" ||
                event.target.tagName === "VIDEO" ||
                event.target.tagName === "AUDIO")
        ) {
            errorType = "resource";
            // severity = "medium";
        }

        // 判断是否为跨域脚本错误
        if (message && message.includes("Script error")) {
            errorType = "cross-origin";
            // severity = "medium";
        }

        const errorData = {
            type: errorType,
            /**
             * tagName src href 加载资源时有效
             */
            tagName: event.target.tagName || "",
            src: event.target.src || "",
            href: event.target.href || "",
            // severity: severity, // 错误优先级
            message: message || "Unknown error",
            filename: filename || "Unknown file",
            lineno: lineno || 0,
            colno: colno || 0,
            stack: error ? error.stack : "",
            timestamp: new Date().toISOString(),
            // userInfo: this.config.enableUserTracking ? this.userInfo : null,
        };

        sdk.capture(this.name, errorData);

        // 阻止默认错误处理（避免控制台重复显示）
        event.preventDefault();
    }

    // 处理未处理的Promise拒绝
    unhandledRejectionTracking(sdk, event) {
        const error = event.reason;

        const errorData = {
            type: "promise",
            // severity: "high",
            message: error ? error.message : "Unhandled Promise rejection",
            stack: error ? error.stack : "",
            timestamp: new Date().toISOString(),
            // userInfo: this.config.enableUserTracking ? this.userInfo : null,
        };

        sdk.capture(this.name, errorData);

        // 阻止默认错误处理
        event.preventDefault();
    }

    // 处理资源加载错误
    resourceErrorTracking() {
        // 检查已加载的资源是否有错误
        const resources = performance.getEntriesByType("resource");
        console.log("处理资源加载错误:", resources);

        resources.forEach((resource) => {
            // 这里可以检查资源的加载状态
            // 注意：performance API 不直接提供错误状态
            // 实际应用中需要结合其他方法
        });
    }

    // 拦截XMLHttpRequest
    xHRErrorTracking(sdk) {
        const self = this;
        const OriginalXHR = window.XMLHttpRequest;

        window.XMLHttpRequest = function () {
            const xhr = new OriginalXHR();

            // 保存原始方法
            const originalOpen = xhr.open;
            const originalSend = xhr.send;

            let method, url;

            // 拦截open方法
            xhr.open = function (...args) {
                method = args[0];
                url = args[1];
                return originalOpen.apply(this, args);
            };

            // 拦截send方法
            xhr.send = function (...args) {
                const startTime = performance.now();  // 毫秒，带小数
                /**
                 *  axios
                        .post("http://127.0.0.1:8080/monitor/test1", {
                        __skipMonitor: true,
                        })
                        .then((response) => {
                        console.log("输出返回的数据:", response.data); // 输出返回的数据
                        })
                        .catch((error) => {
                        console.error("请求出错：", error);
                        });
                    
                    const xhr = new XMLHttpRequest();
                    xhr.open("POST", "http://127.0.0.1:8080/monitor/test1");
                    xhr.send(
                        JSON.stringify({
                        __skipMonitor: true,
                        })
                    );
                 */
                const __skipMonitor = JSON.parse(args[0]).__skipMonitor;
                // console.log("xhr this:", args[0], __skipMonitor);
                // 监听加载完成
                xhr.addEventListener("load", function () {
                    const duration = performance.now() - startTime;

                    if (!__skipMonitor && (xhr.status >= 400 || self.slowRequestThreshold <= duration)) {

                        const errorData = {
                            type: "ajax",
                            // severity: xhr.status >= 500 ? "high" : "medium",
                            message: `HTTP ${xhr.status} ${xhr.statusText}`,
                            url: url,
                            method: method,
                            status: xhr.status,
                            response: xhr.responseText,
                            duration: duration,
                            timestamp: new Date().toISOString(),
                            // userInfo: self.config.enableUserTracking
                            //     ? self.userInfo
                            //     : null,
                        };

                        sdk.capture(self.name, errorData);
                    }
                });

                // 监听错误
                xhr.addEventListener("error", function () {
                    const errorData = {
                        type: "ajax",
                        // severity: "critical",
                        message: "网络请求失败",
                        url: url,
                        method: method,
                        status: 0,
                        timestamp: new Date().toISOString(),
                        // userInfo: self.config.enableUserTracking
                        //     ? self.userInfo
                        //     : null,
                    };
                    if (!__skipMonitor) {
                        sdk.capture(self.name, errorData);
                    }
                });

                // 监听超时
                xhr.addEventListener("timeout", function () {
                    const errorData = {
                        type: "ajax",
                        // severity: "high",
                        message: "请求超时",
                        url: url,
                        method: method,
                        status: 0,
                        timestamp: new Date().toISOString(),
                        // userInfo: self.config.enableUserTracking
                        //     ? self.userInfo
                        //     : null,
                    };

                    if (!__skipMonitor) {
                        sdk.capture(self.name, errorData);
                    }
                });

                return originalSend.apply(this, args);
            };

            return xhr;
        };
    }

    // 拦截fetch API
    fetchErrorTracking(sdk) {
        const self = this;
        const originalFetch = window.fetch;

        window.fetch = function (...args) {

            const url = args[0];
            const options = args[1] || {};
            /**
             *  @description 跳过数据上报请求
            fetch("http://127.0.0.1:8080/monitor/test1", {
                method: "POST",
                __skipMonitor: true,
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
             */
            const __skipMonitor = options.__skipMonitor;
            const method = options.method || "GET";
            const startTime = performance.now();

            return originalFetch
                .apply(this, args)
                .then((response) => {
                    const duration = performance.now() - startTime;
                    if (!__skipMonitor && (!response.ok || self.slowRequestThreshold <= duration)) {
                        const errorData = {
                            type: "fetch",
                            // severity: response.status >= 500 ? "high" : "medium",
                            message: `HTTP ${response.status} ${response.statusText}`,
                            url: url,
                            method: method,
                            status: response.status,
                            duration: duration,
                            timestamp: new Date().toISOString(),
                            // userInfo: self.config.enableUserTracking
                            //     ? self.userInfo
                            // : null,
                        };

                        sdk.capture(self.name, errorData);
                    }
                    return response;
                })
                .catch((error) => {
                    const errorData = {
                        type: "fetch",
                        // severity: "critical",
                        message: error.message,
                        url: url,
                        method: method,
                        status: 0,
                        timestamp: new Date().toISOString(),
                        // userInfo: self.config.enableUserTracking
                        //     ? self.userInfo
                        //     : null,
                    };
                    if (!__skipMonitor) {
                        sdk.capture(self.name, errorData);
                    }
                    throw error;
                });
        };
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
        // 页面停留时长监控
        {
            let enterTime = Date.now();

            document.addEventListener('visibilitychange', this.trackPageStayTime.bind(this, sdk, enterTime), true);
        }

        // 处理用户点击事件
        {
            document.addEventListener('click', this.trackClickBehavior.bind(this, sdk), true);
        }

        // 处理用户输入事件
        {
            document.addEventListener('input', this.trackInputBehavior.bind(this, sdk), true);
        }
    }

    // 移除事件监听
    uninstall() {
        document.removeEventListener("visibilitychange", this.trackPageStayTime.bind(this), true);
        document.removeEventListener('click', this.trackClickBehavior.bind(this, sdk), true);
        document.removeEventListener('input', this.trackInputBehavior.bind(this, sdk), true);
    }

    trackPageStayTime(sdk, enterTime, event) {
        // console.log(arguments);
        if (document.visibilityState === 'hidden') {
            const stayTime = Date.now() - enterTime;
            sdk.capture('userAction', {
                type: 'pageStay',
                stayTime
            });
        } else {
            enterTime = Date.now();
        }
    }

    // 处理用户点击事件
    trackClickBehavior(sdk, e) {
        const target = e.target;
        let description = `点击了 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.className) description += ` .${target.className}`;
        if (target.textContent && target.textContent.length < 30) {
            description += ` (${target.textContent.trim()})`;
        }
        sdk.capture('userAction', {
            type: 'click',
            data: {
                description
            }
        });
    }

    // 处理用户输入事件
    trackInputBehavior(sdk, e) {
        const target = e.target;
        let description = `在 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.placeholder) description += ` [${target.placeholder}]`;

        description += ` 输入: "${target.value}"`;

        sdk.capture('userAction', {
            type: 'input',
            data: {
                description
            }
        });
    }

    // 处理用户滚动事件

    // 处理页面卸载事件
}

new MonitoringCore({
    appId: "abc",
})
    .use(new PerformancePlugin())
    .use(new UserBehaviorPlugin())
    .use(new EnvironmentInfoPlugin())
    .use(new ErrorTrackingPlugin());
