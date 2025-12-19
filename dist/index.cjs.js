'use strict';

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
                const __skipMonitor = JSON.parse(args[0])?.__skipMonitor;
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

class t{t;o=0;i=[];u(t){if(t.hadRecentInput)return;const e=this.i[0],n=this.i.at(-1);this.o&&e&&n&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(this.o+=t.value,this.i.push(t)):(this.o=t.value,this.i=[t]),this.t?.(t);}}const e=()=>{const t=performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},n=t=>{if("loading"===document.readyState)return "loading";{const n=e();if(n){if(t<n.domInteractive)return "loading";if(0===n.domContentLoadedEventStart||t<n.domContentLoadedEventStart)return "dom-interactive";if(0===n.domComplete||t<n.domComplete)return "dom-content-loaded"}}return "complete"},o=t=>{const e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},i=t=>{let e="";try{for(;9!==t?.nodeType;){const n=t,i=n.id?"#"+n.id:[o(n),...Array.from(n.classList).sort()].join(".");if(e.length+i.length>99)return e||i;if(e=e?i+">"+e:i,n.id)break;t=n.parentNode;}}catch{}return e},r=new WeakMap;function s(t,e){return r.get(t)||r.set(t,new e),r.get(t)}let a=-1;const c=()=>a,f=t=>{addEventListener("pageshow",(e=>{e.persisted&&(a=e.timeStamp,t(e));}),!0);},u=(t,e,n,o)=>{let i,r;return s=>{e.value>=0&&(s||o)&&(r=e.value-(i??0),(r||void 0===i)&&(i=e.value,e.delta=r,e.rating=((t,e)=>t>e[1]?"poor":t>e[0]?"needs-improvement":"good")(e.value,n),t(e)));}},d=t=>{requestAnimationFrame((()=>requestAnimationFrame((()=>t()))));},l=()=>{const t=e();return t?.activationStart??0},h=(t,n=-1)=>{const o=e();let i="navigate";c()>=0?i="back-forward-cache":o&&(document.prerendering||l()>0?i="prerender":document.wasDiscarded?i="restore":o.type&&(i=o.type.replace(/_/g,"-")));return {name:t,value:n,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:i}},m=(t,e,n={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const o=new PerformanceObserver((t=>{Promise.resolve().then((()=>{e(t.getEntries());}));}));return o.observe({type:t,buffered:!0,...n}),o}}catch{}},p=t=>{let e=!1;return ()=>{e||(t(),e=!0);}};let g=-1;const y=new Set,v=()=>"hidden"!==document.visibilityState||document.prerendering?1/0:0,b=t=>{if("hidden"===document.visibilityState){if("visibilitychange"===t.type)for(const t of y)t();isFinite(g)||(g="visibilitychange"===t.type?t.timeStamp:0,removeEventListener("prerenderingchange",b,!0));}},M=()=>{if(g<0){const t=l(),e=document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").filter((e=>"hidden"===e.name&&e.startTime>t))[0]?.startTime;g=e??v(),addEventListener("visibilitychange",b,!0),addEventListener("prerenderingchange",b,!0),f((()=>{setTimeout((()=>{g=v();}));}));}return {get firstHiddenTime(){return g},onHidden(t){y.add(t);}}},T=t=>{document.prerendering?addEventListener("prerenderingchange",(()=>t()),!0):t();},E=[1800,3e3],D=(t,e={})=>{T((()=>{const n=M();let o,i=h("FCP");const r=m("paint",(t=>{for(const e of t)"first-contentful-paint"===e.name&&(r.disconnect(),e.startTime<n.firstHiddenTime&&(i.value=Math.max(e.startTime-l(),0),i.entries.push(e),o(!0)));}));r&&(o=u(t,i,E,e.reportAllChanges),f((n=>{i=h("FCP"),o=u(t,i,E,e.reportAllChanges),d((()=>{i.value=performance.now()-n.timeStamp,o(!0);}));})));}));},L=[.1,.25],P=t=>t.find((t=>1===t.node?.nodeType))||t[0],S=(e,o={})=>{const r=s(o=Object.assign({},o),t),a=new WeakMap;r.t=t=>{if(t?.sources?.length){const e=P(t.sources),n=e?.node;if(n){const t=o.generateTarget?.(n)??i(n);a.set(e,t);}}};((e,n={})=>{const o=M();D(p((()=>{let i,r=h("CLS",0);const a=s(n,t),c=t=>{for(const e of t)a.u(e);a.o>r.value&&(r.value=a.o,r.entries=a.i,i());},l=m("layout-shift",c);l&&(i=u(e,r,L,n.reportAllChanges),o.onHidden((()=>{c(l.takeRecords()),i(!0);})),f((()=>{a.o=0,r=h("CLS",0),i=u(e,r,L,n.reportAllChanges),d((()=>i()));})),setTimeout(i));})));})((t=>{const o=(t=>{let e={};if(t.entries.length){const o=t.entries.reduce(((t,e)=>t.value>e.value?t:e));if(o?.sources?.length){const t=P(o.sources);t&&(e={largestShiftTarget:a.get(t),largestShiftTime:o.startTime,largestShiftValue:o.value,largestShiftSource:t,largestShiftEntry:o,loadState:n(o.startTime)});}}return Object.assign(t,{attribution:e})})(t);e(o);}),o);},w=(t,o={})=>{D((o=>{const i=(t=>{let o={timeToFirstByte:0,firstByteToFCP:t.value,loadState:n(c())};if(t.entries.length){const i=e(),r=t.entries.at(-1);if(i){const e=i.activationStart||0,s=Math.max(0,i.responseStart-e);o={timeToFirstByte:s,firstByteToFCP:t.value-s,loadState:n(t.entries[0].startTime),navigationEntry:i,fcpEntry:r};}}return Object.assign(t,{attribution:o})})(o);t(i);}),o);};let _=0,F=1/0,k=0;const B=t=>{for(const e of t)e.interactionId&&(F=Math.min(F,e.interactionId),k=Math.max(k,e.interactionId),_=k?(k-F)/7+1:0);};let C;const O=()=>C?_:performance.interactionCount??0,j=()=>{"interactionCount"in performance||C||(C=m("event",B,{type:"event",buffered:!0,durationThreshold:0}));};let I=0;class A{l=[];h=new Map;m;p;v(){I=O(),this.l.length=0,this.h.clear();}M(){const t=Math.min(this.l.length-1,Math.floor((O()-I)/50));return this.l[t]}u(t){if(this.m?.(t),!t.interactionId&&"first-input"!==t.entryType)return;const e=this.l.at(-1);let n=this.h.get(t.interactionId);if(n||this.l.length<10||t.duration>e.T){if(n?t.duration>n.T?(n.entries=[t],n.T=t.duration):t.duration===n.T&&t.startTime===n.entries[0].startTime&&n.entries.push(t):(n={id:t.interactionId,entries:[t],T:t.duration},this.h.set(n.id,n),this.l.push(n)),this.l.sort(((t,e)=>e.T-t.T)),this.l.length>10){const t=this.l.splice(10);for(const e of t)this.h.delete(e.id);}this.p?.(n);}}}const W=t=>{const e=globalThis.requestIdleCallback||setTimeout;"hidden"===document.visibilityState?t():(t=p(t),addEventListener("visibilitychange",t,{once:!0,capture:!0}),e((()=>{t(),removeEventListener("visibilitychange",t,{capture:!0});})));},q=[200,500],x=(t,e={})=>{const o=s(e=Object.assign({},e),A);let r=[],a=[],c=0;const d=new WeakMap,l=new WeakMap;let p=!1;const g=()=>{p||(W(y),p=!0);},y=()=>{const t=o.l.map((t=>d.get(t.entries[0]))),e=a.length-50;a=a.filter(((n,o)=>o>=e||t.includes(n)));const n=new Set;for(const t of a){const e=v(t.startTime,t.processingEnd);for(const t of e)n.add(t);}const i=r.length-1-50;r=r.filter(((t,e)=>t.startTime>c&&e>i||n.has(t))),p=!1;};o.m=t=>{const e=t.startTime+t.duration;let n;c=Math.max(c,t.processingEnd);for(let o=a.length-1;o>=0;o--){const i=a[o];if(Math.abs(e-i.renderTime)<=8){n=i,n.startTime=Math.min(t.startTime,n.startTime),n.processingStart=Math.min(t.processingStart,n.processingStart),n.processingEnd=Math.max(t.processingEnd,n.processingEnd),n.entries.push(t);break}}n||(n={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:e,entries:[t]},a.push(n)),(t.interactionId||"first-input"===t.entryType)&&d.set(t,n),g();},o.p=t=>{if(!l.get(t)){const n=t.entries[0].target;if(n){const o=e.generateTarget?.(n)??i(n);l.set(t,o);}}};const v=(t,e)=>{const n=[];for(const o of r)if(!(o.startTime+o.duration<t)){if(o.startTime>e)break;n.push(o);}return n},b=t=>{const e=t.entries[0],i=d.get(e),r=e.processingStart,s=Math.max(e.startTime+e.duration,r),a=Math.min(i.processingEnd,s),c=i.entries.sort(((t,e)=>t.processingStart-e.processingStart)),f=v(e.startTime,a),u=o.h.get(e.interactionId),h={interactionTarget:l.get(u),interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:s,processedEventEntries:c,longAnimationFrameEntries:f,inputDelay:r-e.startTime,processingDuration:a-r,presentationDelay:s-a,loadState:n(e.startTime),longestScript:void 0,totalScriptDuration:void 0,totalStyleAndLayoutDuration:void 0,totalPaintDuration:void 0,totalUnattributedDuration:void 0};(t=>{if(!t.longAnimationFrameEntries?.length)return;const e=t.interactionTime,n=t.inputDelay,o=t.processingDuration;let i,r,s=0,a=0,c=0,f=0;for(const c of t.longAnimationFrameEntries){a=a+c.startTime+c.duration-c.styleAndLayoutStart;for(const t of c.scripts){const c=t.startTime+t.duration;if(c<e)continue;const u=c-Math.max(e,t.startTime),d=t.duration?u/t.duration*t.forcedStyleAndLayoutDuration:0;s+=u-d,a+=d,u>f&&(r=t.startTime<e+n?"input-delay":t.startTime>=e+n+o?"presentation-delay":"processing-duration",i=t,f=u);}}const u=t.longAnimationFrameEntries.at(-1),d=u?u.startTime+u.duration:0;d>=e+n+o&&(c=t.nextPaintTime-d),i&&r&&(t.longestScript={entry:i,subpart:r,intersectingDuration:f}),t.totalScriptDuration=s,t.totalStyleAndLayoutDuration=a,t.totalPaintDuration=c,t.totalUnattributedDuration=t.nextPaintTime-e-s-a-c;})(h);return Object.assign(t,{attribution:h})};m("long-animation-frame",(t=>{r=r.concat(t),g();})),((t,e={})=>{if(!globalThis.PerformanceEventTiming||!("interactionId"in PerformanceEventTiming.prototype))return;const n=M();T((()=>{j();let o,i=h("INP");const r=s(e,A),a=t=>{W((()=>{for(const e of t)r.u(e);const e=r.M();e&&e.T!==i.value&&(i.value=e.T,i.entries=e.entries,o());}));},c=m("event",a,{durationThreshold:e.durationThreshold??40});o=u(t,i,q,e.reportAllChanges),c&&(c.observe({type:"first-input",buffered:!0}),n.onHidden((()=>{a(c.takeRecords()),o(!0);})),f((()=>{r.v(),i=h("INP"),o=u(t,i,q,e.reportAllChanges);})));}));})((e=>{const n=b(e);t(n);}),e);};class N{m;u(t){this.m?.(t);}}const H=[2500,4e3],R=(t,n={})=>{const o=s(n=Object.assign({},n),N),r=new WeakMap;o.m=t=>{const e=t.element;if(e){const o=n.generateTarget?.(e)??i(e);r.set(t,o);}};((t,e={})=>{T((()=>{const n=M();let o,i=h("LCP");const r=s(e,N),a=t=>{e.reportAllChanges||(t=t.slice(-1));for(const e of t)r.u(e),e.startTime<n.firstHiddenTime&&(i.value=Math.max(e.startTime-l(),0),i.entries=[e],o());},c=m("largest-contentful-paint",a);if(c){o=u(t,i,H,e.reportAllChanges);const n=p((()=>{a(c.takeRecords()),c.disconnect(),o(!0);})),r=t=>{t.isTrusted&&(W(n),removeEventListener(t.type,r,{capture:!0}));};for(const t of ["keydown","click","visibilitychange"])addEventListener(t,r,{capture:!0});f((n=>{i=h("LCP"),o=u(t,i,H,e.reportAllChanges),d((()=>{i.value=performance.now()-n.timeStamp,o(!0);}));}));}}));})((n=>{const o=(t=>{let n={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){const o=e();if(o){const e=o.activationStart||0,i=t.entries.at(-1),s=i.url&&performance.getEntriesByType("resource").filter((t=>t.name===i.url))[0],a=Math.max(0,o.responseStart-e),c=Math.max(a,s?(s.requestStart||s.startTime)-e:0),f=Math.min(t.value,Math.max(c,s?s.responseEnd-e:0));n={target:r.get(i),timeToFirstByte:a,resourceLoadDelay:c-a,resourceLoadDuration:f-c,elementRenderDelay:t.value-f,navigationEntry:o,lcpEntry:i},i.url&&(n.url=i.url),s&&(n.lcpResourceEntry=s);}}return Object.assign(t,{attribution:n})})(n);t(o);}),n);},U=[800,1800],V=t=>{document.prerendering?T((()=>V(t))):"complete"!==document.readyState?addEventListener("load",(()=>V(t)),!0):setTimeout(t);},$=(t,n={})=>{((t,n={})=>{let o=h("TTFB"),i=u(t,o,U,n.reportAllChanges);V((()=>{const r=e();r&&(o.value=Math.max(r.responseStart-l(),0),o.entries=[r],i(!0),f((()=>{o=h("TTFB",0),i=u(t,o,U,n.reportAllChanges),i(!0);})));}));})((e=>{const n=(t=>{let e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){const n=t.entries[0],o=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-o,0),r=Math.max(n.domainLookupStart-o,0),s=Math.max(n.connectStart-o,0),a=Math.max(n.connectEnd-o,0);e={waitingDuration:i,cacheDuration:r-i,dnsDuration:s-r,connectionDuration:a-s,requestDuration:t.value-a,navigationEntry:n};}return Object.assign(t,{attribution:e})})(e);t(n);}),n);};

// 性能监控插件
class PerformancePlugin {
    name = 'performance';
    sdk = null;
    metrics = {
        // Core Web Vitals
        FCP: null,
        LCP: null,
        FID: null,
        CLS: 0,

        // 加载性能
        TTFB: null,
        FPT: null, // 白屏时间 First Paint Time
        TTI: null, // 可交互时间 Time to Interactive
        READY: null, // DOM Ready时间
        LOAD: null, // 页面完全加载时间

        // 资源性能
        resources: []
    };
    performanceObservers = [];

    install(sdk) {
        this.sdk = sdk;
        window.addEventListener("load", this.performanceMetricTracking.bind(this));
    }

    uninstall() {
        // 断开所有PerformanceObserver
        this.performanceObservers.forEach((observer) => {
            if (observer) observer.disconnect();
        });
        this.performanceObservers = [];

        window.removeEventListener("load", this.performanceMetricTracking.bind(this));
    }

    performanceMetricTracking() {
        this.collectPerformanceMetrics();
        this.observePerformance();
        this.collectResourceTiming();
        S(this.webVitalsReport.bind(this));
        x(this.webVitalsReport.bind(this));
        R(this.webVitalsReport.bind(this));
        w(this.webVitalsReport.bind(this));
        $(this.webVitalsReport.bind(this));
    }

    // 收集性能指标
    collectPerformanceMetrics() {
        // 使用Performance Timeline API收集指标
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            // TTFB (Time to First Byte)
            this.metrics.TTFB = timing.responseStart - timing.requestStart;

            // 白屏时间 (First Paint Time)
            // 实际中需要通过PerformanceObserver获取FP/FCP
            // 这里使用一个近似值
            this.metrics.FPT = timing.responseEnd - timing.navigationStart;

            // DOM Ready时间
            this.metrics.READY =
                timing.domContentLoadedEventEnd - timing.navigationStart;

            setTimeout(() => {
                // 页面完全加载时间
                this.metrics.LOAD = timing.loadEventEnd - timing.navigationStart;
                // console.log("页面完全加载:", this.metrics.LOAD);
                this.sdk.capture("performance", {
                    type: "LOAD",
                    value: this.metrics.LOAD,
                    description: "页面完全加载"
                });
            });

            // 常见性能指标
            // console.log("白屏时间:", this.metrics.FPT);
            // console.log("DNS 查询:", timing.responseEnd - timing.navigationStart);
            // console.log("TCP 建连:", timing.responseEnd - timing.navigationStart);
            // console.log("SSL:", timing.responseEnd - timing.navigationStart);
            // console.log("TTFB:", this.metrics.TTFB);
            // console.log("响应传输:", timing.responseEnd - timing.navigationStart);
            // console.log("DOM 解析:", timing.responseEnd - timing.navigationStart);
            // console.log("DOM Ready:", this.metrics.READY);
            // console.log("DCL:", timing.responseEnd - timing.navigationStart);
            // console.log("页面完全加载:", this.metrics.LOAD);

            this.sdk.capture("performance", {
                type: "FPT",
                value: this.metrics.FPT,
                description: "白屏时间"
            });
            this.sdk.capture("performance", {
                type: "READY",
                value: this.metrics.READY,
                description: "DOM Ready时间"
            });
        }

        // 使用PerformanceNavigationTiming API (如果可用)
        if (window.performance && window.performance.getEntriesByType) {
            const navigationEntries =
                performance.getEntriesByType("navigation");
            if (navigationEntries.length > 0) {
                const navigation = navigationEntries[0];

                // 更精确的TTFB
                this.metrics.TTFB = navigation.responseStart;
                // console.log("TTFB (Navigation Timing):", this.metrics.TTFB);
            }
        }
    }

    // 监听性能指标
    observePerformance() {
        if ('PerformanceObserver' in window) {
            // FP(first-paint): 从页面加载开始到第一个像素绘制到屏幕上的时间，也可以把 FP 理解成白屏时间。
            // new PerformanceObserver((entryList) => {
            //     for (const entry of entryList.getEntries()) {
            //         this.sdk.capture("performance", {
            //             type: "FP",
            //             metric: entry
            //         })
            //     }
            // }).observe({ type: 'paint', buffered: true })

            // FCP观察者 https://web.developers.google.cn/articles/fcp?hl=zh-cn
            // new PerformanceObserver((entryList) => {
            //     const entries = entryList.getEntries();
            //     for (const entry of entries) {
            //         if (entry.name === "first-contentful-paint") {
            //             this.sdk.capture('performance', {
            //                 type: 'FCP',
            //                 value: entry.startTime
            //             });
            //         }
            //     }
            // }).observe({ entryTypes: ["paint"] });

            // LCP观察者 https://web.developers.google.cn/articles/clp?hl=zh-cn
            // new PerformanceObserver((entryList) => {
            //     const entries = entryList.getEntries();
            //     const lastEntry = entries[entries.length - 1];

            //     this.sdk.capture('performance', {
            //         type: 'LCP',
            //         value: lastEntry.renderTime || lastEntry.loadTime
            //     });
            // }).observe({ entryTypes: ['largest-contentful-paint'] });

            // CLS观察者 https://web.developers.google.cn/articles/cls?hl=zh-cn#measure-cls
            // new PerformanceObserver((entryList) => {
            //     for (const entry of entryList.getEntries()) {
            //         this.sdk.capture('performance', {
            //             type: 'CLS',
            //             value: entry
            //         });
            //     }
            // }).observe({ type: 'layout-shift', buffered: true });

            // TTFB观察者 https://web.developers.google.cn/articles/ttfb?hl=zh-cn
            // new PerformanceObserver((entryList) => {
            //     const [pageNav] = entryList.getEntriesByType('navigation');
            //     this.sdk.capture('performance', {
            //         type: 'TTFB',
            //         value: pageNav.responseStart
            //     });
            // }).observe({
            //     type: 'navigation',
            //     buffered: true
            // });

            // FID观察者 https://web.developers.google.cn/articles/fid?hl=zh-cn#how_to_measure_fid
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    const delay = entry.processingStart - entry.startTime;
                    this.metrics.FID = delay;
                    this.sdk.capture("performance", {
                        type: "FID",
                        value: this.metrics.FID
                    });
                }
            }).observe({ type: 'first-input', buffered: true });
        }
    }

    // 收集资源性能数据
    collectResourceTiming() {
        if (window.performance && window.performance.getEntriesByType) {
            const resources = performance.getEntriesByType("resource");
            for (const resource of resources) {
                this.processResourceEntry(resource);
                console.log("resource:", resource);
            }

            // 观察新的资源加载
            if ("PerformanceObserver" in window) {
                try {
                    const resourceObserver = new PerformanceObserver(
                        (entryList) => {
                            const entries = entryList.getEntries();
                            for (const entry of entries) {
                                this.processResourceEntry(entry);
                            }
                        }
                    );

                    resourceObserver.observe({ entryTypes: ["resource"] });
                    this.performanceObservers = [resourceObserver];
                } catch (e) {
                    console.error("PerformanceObserver error:", e);
                }
            }
        }
    }

    // 处理资源条目
    processResourceEntry(entry) {
        const resource = {
            name: entry.name,
            type: entry.initiatorType,
            duration: entry.duration,
            startTime: entry.startTime,
            initiatorType: entry.initiatorType,
            size: entry.transferSize || 0,
            decodedSize: entry.decodedBodySize || 0,
            encodedSize: entry.encodedBodySize || 0,
            cached: this.isCachedResource(entry),
            timing: {
                dns: entry.domainLookupEnd - entry.domainLookupStart,
                tcp: entry.connectEnd - entry.connectStart,
                ssl:
                    entry.secureConnectionStart > 0
                        ? entry.connectEnd - entry.secureConnectionStart
                        : 0,
                ttfb: entry.responseStart - entry.requestStart,
                download: entry.responseEnd - entry.responseStart,
            },
            serverTiming: entry.serverTiming || [],
        };

        this.metrics.resources.push(resource);
        console.log(`资源加载: ${this.getResourceName(resource.name)}`,
            resource.duration, `是否是缓存资源: ${resource.cached}`);
    }


    // 判断资源是否从缓存加载
    isCachedResource(entry) {
        // 如果transferSize为0且encodedBodySize不为0，说明是从缓存加载
        // 注意：跨域资源可能无法获取这些字段
        return entry.transferSize === 0 && entry.encodedBodySize > 0;
    }

    // 获取资源名称
    getResourceName(fullName) {
        const urlParts = fullName.split("/");
        return urlParts[urlParts.length - 1] || fullName;
    }

    // web-vitals 指标上报
    webVitalsReport(metric) {
        // console.log(`metric name: ${metric.name}`, metric);
        this.metrics[metric.name] = metric.value;
        this.sdk.capture("performance", {
            type: metric.name,
            metric
        });
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
