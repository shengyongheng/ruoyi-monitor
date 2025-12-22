// 错误监控插件
import { RRWEB_RECORD_START_EVENT, RRWEB_RECORD_STOP_EVENT } from "@common/constants/rrweb";
import { EventBus } from "@common/eventBus/EventBus";
import { genRandomUUID } from "@common/utils/randomUUID";
import { start, stop } from "@common/utils/rrweb";

export class ErrorTrackingPlugin extends EventBus {
    name = 'errorTracking';
    slowRequestThreshold = 3000; // 慢请求阈值

    constructor() {
        super();
        this.on(RRWEB_RECORD_START_EVENT, start);
        this.on(RRWEB_RECORD_STOP_EVENT, stop);
        this.emit(RRWEB_RECORD_START_EVENT)
    }

    install(sdk) {
        {
            // 监听全局错误
            // JS 执行错误（语法错误、运行时错误）
            // 资源加载错误（图片、脚本、样式等）
            // 不能捕获 Promise 错误
            window.addEventListener("error", this.windowErrorTracking.bind(this, sdk), true);
        }
        {
            // 监听未处理的Promise拒绝
            window.addEventListener(
                "unhandledrejection",
                this.unhandledRejectionTracking.bind(this)
            );
        }
        {
            // 监听资源加载错误
            // window.addEventListener("load", this.resourceErrorTracking.bind(this));
        }
        this.xHRErrorTracking(sdk)
        this.fetchErrorTracking(sdk)
    }

    // 
    uninstall() {
        window.removeEventListener("error", this.windowErrorTracking.bind(this, sdk), true);
        window.removeEventListener(
            "unhandledrejection",
            this.unhandledRejectionTracking.bind(this)
        );
        // window.removeEventListener("load", this.resourceErrorTracking.bind(this));
        this.off(RRWEB_RECORD_START_EVENT);
        this.off(RRWEB_RECORD_STOP_EVENT);
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
        const id = genRandomUUID();
        const errorData = {
            id,
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

        sdk.capture(this.name, errorData)
        if (errorData === "js") {
            this.emit(RRWEB_RECORD_STOP_EVENT, {
                id, sdk
            })
        }
        // 阻止默认错误处理（避免控制台重复显示）
        event.preventDefault();
    }

    // 处理未处理的Promise拒绝
    unhandledRejectionTracking(sdk, event) {
        const error = event.reason;

        const errorData = {
            id: genRandomUUID(),
            type: "promise",
            // severity: "high",
            message: error ? error.message : "Unhandled Promise rejection",
            stack: error ? error.stack : "",
            timestamp: new Date().toISOString(),
            // userInfo: this.config.enableUserTracking ? this.userInfo : null,
        };

        sdk.capture(this.name, errorData)

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

            let method, url

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
                            id: genRandomUUID(),
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

                        sdk.capture(self.name, errorData)
                    }
                });

                // 监听错误
                xhr.addEventListener("error", function () {
                    const errorData = {
                        id: genRandomUUID(),
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
                        sdk.capture(self.name, errorData)
                    }
                });

                // 监听超时
                xhr.addEventListener("timeout", function () {
                    const errorData = {
                        id: genRandomUUID(),
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
                        sdk.capture(self.name, errorData)
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
                            id: genRandomUUID(),
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

                        sdk.capture(self.name, errorData)
                    }
                    return response;
                })
                .catch((error) => {
                    const errorData = {
                        id: genRandomUUID(),
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
                        sdk.capture(self.name, errorData)
                    }
                    throw error;
                });
        };
    }
}