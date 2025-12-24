// 性能监控插件
import { genRandomUUID } from '@common/utils/randomUUID';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals/attribution';
export class PerformancePlugin {
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
    };
    performanceObservers = [];

    install(sdk) {
        this.sdk = sdk
        window.addEventListener("load", this.performanceMetricTracking.bind(this))
    }

    uninstall() {
        // 断开所有PerformanceObserver
        this.performanceObservers.forEach((observer) => {
            if (observer) observer.disconnect();
        });
        this.performanceObservers = [];

        window.removeEventListener("load", this.performanceMetricTracking.bind(this))
    }

    performanceMetricTracking() {
        this.collectPerformanceMetrics()
        this.observePerformance();
        onCLS(this.webVitalsReport.bind(this));
        onINP(this.webVitalsReport.bind(this));
        onLCP(this.webVitalsReport.bind(this));
        onFCP(this.webVitalsReport.bind(this));
        onTTFB(this.webVitalsReport.bind(this));
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
                // 页面完全加载
                this.sdk.capture("performance", {
                    type: "LOAD",
                    id: genRandomUUID(),
                    value: this.metrics.LOAD,
                })
            })

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

            // 白屏时间
            this.sdk.capture("performance", {
                type: "FPT",
                id: genRandomUUID(),
                value: this.metrics.FPT,
            })
            // DOM Ready时间
            this.sdk.capture("performance", {
                type: "READY",
                id: genRandomUUID(),
                value: this.metrics.READY,
            })
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
            // const fpObserver = new PerformanceObserver((entryList) => {
            //     for (const entry of entryList.getEntries()) {
            //         this.sdk.capture("performance", {
            //             type: "FP",
            //             metric: entry
            //         })
            //     }
            // });
            // fpObserver.observe({ type: 'paint', buffered: true })
            // this.performanceObservers.push(fpObserver)

            // FCP观察者 https://web.developers.google.cn/articles/fcp?hl=zh-cn
            // const fcpObserver = new PerformanceObserver((entryList) => {
            //     const entries = entryList.getEntries();
            //     for (const entry of entries) {
            //         if (entry.name === "first-contentful-paint") {
            //             this.sdk.capture('performance', {
            //                 type: 'FCP',
            //                 value: entry.startTime
            //             });
            //         }
            //     }
            // });
            // fcpObserver.observe({ entryTypes: ["paint"] });
            // this.performanceObservers.push(fcpObserver)

            // LCP观察者 https://web.developers.google.cn/articles/clp?hl=zh-cn
            // const lcpObserver = new PerformanceObserver((entryList) => {
            //     const entries = entryList.getEntries();
            //     const lastEntry = entries[entries.length - 1];

            //     this.sdk.capture('performance', {
            //         type: 'LCP',
            //         value: lastEntry.renderTime || lastEntry.loadTime
            //     });
            // });
            // lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            // this.performanceObservers.push(lcpObserver)

            // CLS观察者 https://web.developers.google.cn/articles/cls?hl=zh-cn#measure-cls
            // const clsObserver = new PerformanceObserver((entryList) => {
            //     for (const entry of entryList.getEntries()) {
            //         this.sdk.capture('performance', {
            //             type: 'CLS',
            //             value: entry
            //         });
            //     }
            // });
            // clsObserver.observe({ type: 'layout-shift', buffered: true });
            // this.performanceObservers.push(clsObserver)

            // TTFB观察者 https://web.developers.google.cn/articles/ttfb?hl=zh-cn
            // const ttfbObserver = new PerformanceObserver((entryList) => {
            //     const [pageNav] = entryList.getEntriesByType('navigation');
            //     this.sdk.capture('performance', {
            //         type: 'TTFB',
            //         value: pageNav.responseStart
            //     });
            // });
            // ttfbObserver.observe({
            //     type: 'navigation',
            //     buffered: true
            // });
            // this.performanceObservers.push(ttfbObserver)

            // FID观察者 https://web.developers.google.cn/articles/fid?hl=zh-cn#how_to_measure_fid
            const fidObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    const delay = entry.processingStart - entry.startTime;
                    this.metrics.FID = delay;
                    this.sdk.capture("performance", {
                        id: genRandomUUID(),
                        type: "FID",
                        value: this.metrics.FID
                    })
                }
            });
            fidObserver.observe({ type: 'first-input', buffered: true });
            this.performanceObservers.push(fidObserver)
        }
    }
    // web-vitals 指标上报
    webVitalsReport(metric) {
        // console.log(`metric name: ${metric.name}`, metric);
        this.metrics[metric.name] = metric.value
        this.sdk.capture("performance", {
            type: metric.name,
            value: metric.value
        })
    }
}