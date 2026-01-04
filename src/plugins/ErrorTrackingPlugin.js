// 错误监控插件
import { RRWEB_RECORD_START_EVENT, RRWEB_RECORD_STOP_EVENT } from "@common/constants/rrweb";
import { EventBus } from "@common/eventBus/EventBus";
import { start, stop } from "@common/utils/rrweb";

export class ErrorTrackingPlugin extends EventBus {
    name = 'errorTracking';
    slowRequestThreshold = 3000; // 慢请求阈值
    sdk = null

    constructor() {
        super();
        this.on(RRWEB_RECORD_START_EVENT, start);
        this.on(RRWEB_RECORD_STOP_EVENT, stop);
        this.emit(RRWEB_RECORD_START_EVENT)
    }

    install(sdk) {
        this.sdk = sdk
        {
            // console.log("inline 预埋脚本采集的数据:", window.__MONITOR_BOOT__ ?? window.__MONITOR_BOOT__.logs);
            (window.__MONITOR_BOOT__ ?? []).forEach(event => this.windowErrorTracking(event))
        }
        {
            // 监听全局错误
            // JS 执行错误（语法错误、运行时错误）
            // 资源加载错误（图片、脚本、样式等）
            // 不能捕获 Promise 错误
            window.addEventListener("error", this.windowErrorTracking.bind(this), true);
        }
        {
            // 监听未处理的Promise拒绝
            window.addEventListener(
                "unhandledrejection",
                this.unhandledRejectionTracking.bind(this)
            );
        }
        this.xHRErrorTracking()
        this.fetchErrorTracking()
    }

    // 
    uninstall() {
        window.removeEventListener("error", this.windowErrorTracking.bind(this), true);
        window.removeEventListener(
            "unhandledrejection",
            this.unhandledRejectionTracking.bind(this)
        );
        this.off(RRWEB_RECORD_START_EVENT);
        this.off(RRWEB_RECORD_STOP_EVENT);
    }

    windowErrorTracking(event) {
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
            console.warn('跨域脚本内部错误，可能缺少 CORS 或 crossorigin 配置');
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
        };

        this.sdk.capture(this.name, errorData)
        if (errorData === "js") {
            this.emit(RRWEB_RECORD_STOP_EVENT, {
                sdk: this.sdk
            })
        }
        // 阻止默认错误处理（避免控制台重复显示）
        event.preventDefault();
    }

    // 处理未处理的Promise拒绝
    // ✅最佳实践：强制将所有错误对象转换为 Error 对象
    unhandledRejectionTracking(event) {
        const { reason } = event;
        let message = "";
        let stack = "";
        let line = 0;
        let column = 0;
        let filename = "";

        if (reason instanceof Error) {
            message = reason.message;
        } else {
            message = reason;
        }

        if (reason instanceof Error) {
            if (reason.stack) {
                var matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
                if (matchResult) {
                    filename = matchResult[1];
                    line = matchResult[2];
                    column = matchResult[3];
                }
                // stack = getLines(reason.stack);
                stack = reason.stack;
            }
        }
        console.log("promise event:", message, stack, filename, line, column);


        const errorData = {
            type: "promise",
            // severity: "high",

            // Promise.reject(new Error("something broke")); 
            // reject new Error 时，event 对象的 reson 属性为 object{message: "something broke", stack: "..."}
            // Promise.reject(xxxx); reject 非 Error 对象时，event 对象的 reson 属性为 xxxx
            message: message,
            stack: stack,
            filename: filename,
            lineno: line,
            colno: column,
        };

        this.sdk.capture(this.name, errorData)

        // 阻止默认错误处理
        event.preventDefault();
    }

    /**
     * 拦截XMLHttpRequest
     * 重写XMLHttpRequest可以监控到axios的请求，因为axios在浏览器环境中是基于XMLHttpRequest实现的
     * （axios在浏览器端使用XMLHttpRequest，在Node.js中使用http模块）。
     * 但是，axios也可能使用fetch（如果配置了fetch选项，但默认不启用）。
     * */
    xHRErrorTracking() {
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
                const __skipMonitor = JSON.parse(args[0] || "{}")?.__skipMonitor;
                // console.log("xhr this:", args[0], __skipMonitor);
                // 监听加载完成
                xhr.addEventListener("load", function () {
                    const duration = performance.now() - startTime;

                    if (!__skipMonitor && (xhr.status >= 400 ||
                        // 超出慢请求阈值
                        self.slowRequestThreshold <= duration
                    )) {

                        const errorData = {
                            type: "ajax",
                            // severity: xhr.status >= 500 ? "high" : "medium",
                            message: `HTTP ${xhr.status} ${xhr.statusText}`,
                            url: url,
                            method: method,
                            status: xhr.status,
                            // response: xhr.responseText,
                            duration: duration,
                            description: self.slowRequestThreshold <= duration ? "慢请求" : ""
                        };

                        this.sdk.capture(self.name, errorData)
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
                        status: xhr.status || 0,
                    };
                    if (!__skipMonitor) {
                        this.sdk.capture(self.name, errorData)
                    }
                });

                // 监听超时
                xhr.addEventListener("timeout", function () {
                    const duration = performance.now() - startTime;
                    const errorData = {
                        type: "ajax",
                        // severity: "high",
                        message: "请求超时",
                        url: url,
                        method: method,
                        status: xhr.status || 0,
                        duration,
                    };

                    if (!__skipMonitor) {
                        this.sdk.capture(self.name, errorData)
                    }
                });

                return originalSend.apply(this, args);
            };

            return xhr;
        };
    }

    // 拦截fetch API
    fetchErrorTracking() {
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
                            description: self.slowRequestThreshold <= duration ? "慢请求" : ""
                        };

                        this.sdk.capture(self.name, errorData)
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
                    };
                    if (!__skipMonitor) {
                        this.sdk.capture(self.name, errorData)
                    }
                    throw error;
                });
        };
    }
}