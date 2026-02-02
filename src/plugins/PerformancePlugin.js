// 性能监控插件
import { genRandomUUID } from '@common/utils/randomUUID';
import { onFCP, onINP, onTTFB } from 'web-vitals/attribution';

/**
 * Timing 指标含义:
 *  https://zhuanlan.zhihu.com/p/82981365
 *  https://www.w3.org/TR/navigation-timing-2/#process
 */
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
        TTFB: null, // 请求响应耗时
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
        // onCLS(this.webVitalsReport.bind(this));
        onINP(this.webVitalsReport.bind(this));
        // onLCP(this.webVitalsReport.bind(this));
        onFCP(this.webVitalsReport.bind(this)); // 白屏时间
        onTTFB(this.webVitalsReport.bind(this));
    }

    // 收集性能指标
    collectPerformanceMetrics() {
        // 使用Performance Timeline API收集指标
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            console.log("timing:", timing);

            // TTFB (Time to First Byte)
            this.metrics.TTFB = timing.responseStart - timing.requestStart;

            // 白屏时间 (First Paint Time)
            // 实际中需要通过PerformanceObserver获取FP/FCP
            // 这里使用一个近似值
            // this.metrics.FPT = timing.responseEnd - timing.navigationStart;

            // 首次可交互时间
            this.metrics.TTI = timing.domInteractive - timing.fetchStart;

            // DOM Ready时间
            this.metrics.READY =
                timing.domContentLoadedEventEnd - timing.navigationStart;

            // setTimeout(() => {
            //     // 页面完全加载时间
            //     this.metrics.LOAD = timing.loadEventStart - timing.fetchStart;
            //     console.log("页面完全加载:", this.metrics.LOAD);
            //     // 页面完全加载
            //     this.sdk.capture(this.name, {
            //         type: "LOAD",
            //         id: genRandomUUID(),
            //         value: this.metrics.LOAD,
            //     })
            // })

            // 性能瀑图：https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce6f41887a9a469f8384e3302b576850~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?
            // 性能指标采集方案：https://juejin.cn/post/7097157902862909471#heading-16
            // 瀑图渲染数据选择方案 ChatGpt 回答：https://chatgpt.com/s/t_697af925ad9c8191b9be054b7ddd0e8f
            // 页面加载性能指标
            console.log("DNS 查询:", timing.domainLookupEnd - timing.domainLookupStart);
            console.log("TCP 建连:", timing.connectEnd - timing.connectStart);
            console.log("SSL:", timing.connectEnd - timing.secureConnectionStart ? timing.secureConnectionStart : timing.connectEnd);
            console.log("请求响应耗时 TTFB:", timing.responseStart - timing.fetchStart);
            console.log("响应传输:", timing.responseEnd - timing.responseStart);
            console.log("DOM 解析:", timing.domInteractive - timing.responseEnd);
            console.log("HTML加载完成时间 DOM Ready:", this.metrics.READY);
            console.log("同步资源加载 Res:", timing.loadEventStart - timing.domContentLoadedEventEnd);
            
            
            this.sdk.capture(this.name, {
                type: "DNS 查询",
                id: genRandomUUID(),
                value: timing.domainLookupEnd - timing.domainLookupStart,
            })
            this.sdk.capture(this.name, {
                type: "TCP 建连",
                id: genRandomUUID(),
                value: timing.connectEnd - timing.connectStart,
            })
            this.sdk.capture(this.name, {
                type: "SSL",
                id: genRandomUUID(),
                value: timing.connectEnd - timing.secureConnectionStart ? timing.secureConnectionStart : timing.connectEnd,
            })
            this.sdk.capture(this.name, {
                type: "响应传输",
                id: genRandomUUID(),
                value: timing.responseEnd - timing.responseStart,
            })
            this.sdk.capture(this.name, {
                type: "DOM 解析",
                id: genRandomUUID(),
                value: timing.domInteractive - timing.responseEnd,
            })
            this.sdk.capture(this.name, {
                type: "Ready",
                id: genRandomUUID(),
                value: this.metrics.READY,
            })
            this.sdk.capture(this.name, {
                type: "资源加载",
                id: genRandomUUID(),
                value: timing.loadEventStart - timing.domContentLoadedEventEnd,
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
            const longTaskObserver = new PerformanceObserver(list => {
                list.getEntries().forEach(entry => {
                    console.log("LONG Task:", entry);
                    // this.sdk.capture(this.name, {
                    //     type: 'long-task',
                    //     duration: entry.duration,
                    //     startTime: entry.startTime
                    // });
                });
            });
            longTaskObserver.observe({ type: "longtask", buffered: true });
            this.performanceObservers.push(longTaskObserver)

            // FP(first-paint): 从页面加载开始到第一个像素绘制到屏幕上的时间，也可以把 FP 理解成白屏时间。
            // const fpObserver = new PerformanceObserver((entryList) => {
            //     for (const entry of entryList.getEntries()) {
            //         this.sdk.capture(this.name, {
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
            //             this.sdk.capture(this.name, {
            //                 type: 'FCP',
            //                 value: entry.startTime
            //             });
            //         }
            //     }
            // });
            // fcpObserver.observe({ entryTypes: ["paint"] });
            // this.performanceObservers.push(fcpObserver)

            // LCP观察者 https://web.developers.google.cn/articles/clp?hl=zh-cn
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.sdk.capture(this.name, {
                    type: 'LCP',
                    value: lastEntry.renderTime || lastEntry.loadTime
                });
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            this.performanceObservers.push(lcpObserver)

            // CLS观察者 https://web.developers.google.cn/articles/cls?hl=zh-cn#measure-cls
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    // 过滤掉值为0的CLS
                    // if (entry.value === 0) continue;
                    this.sdk.capture(this.name, {
                        type: 'CLS',
                        value: entry.value
                    });
                }
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });
            this.performanceObservers.push(clsObserver)

            // TTFB观察者 https://web.developers.google.cn/articles/ttfb?hl=zh-cn
            // const ttfbObserver = new PerformanceObserver((entryList) => {
            //     const [pageNav] = entryList.getEntriesByType('navigation');
            //     this.sdk.capture(this.name, {
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
                    this.sdk.capture(this.name, {
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
        this.sdk.capture(this.name, {
            type: metric.name,
            value: metric.value
        })
    }
}