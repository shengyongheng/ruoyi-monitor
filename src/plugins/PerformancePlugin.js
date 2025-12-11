// 性能监控插件
export class PerformancePlugin {
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