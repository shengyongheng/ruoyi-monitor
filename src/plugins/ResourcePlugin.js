// 资源监控
export class ResourcePlugin {

    name = 'resource';
    sdk = null;
    resources = []
    resourceObserver = null

    install(sdk) {
        this.sdk = sdk
        this.collectResourceTiming()
    }

    uninstall() {
        this.resourceObserver.disconnect();
    }

    // 收集资源性能数据
    collectResourceTiming() {
        if (window.performance && window.performance.getEntriesByType) {
            const resources = performance.getEntriesByType("resource");
            for (const resource of resources) {
                this.processResourceEntry(resource);
                // console.log("resource:", resource);
            }

            // 观察新的资源加载
            if ("PerformanceObserver" in window) {
                try {
                    this.resourceObserver = new PerformanceObserver(
                        (entryList) => {
                            const entries = entryList.getEntries();
                            for (const entry of entries) {
                                this.processResourceEntry(entry);
                            }
                        }
                    );

                    this.resourceObserver.observe({ entryTypes: ["resource"] });
                } catch (e) {
                    console.error("PerformanceObserver error:", e);
                }
            }
        }
    }

    // 处理资源条目
    processResourceEntry(entry) {
        // 不监控 axios、fetch、ajax 请求资源
        if (entry.initiatorType === "xmlhttprequest" && entry.entryType === "resource") return;

        const resource = {
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime,
            entryType: entry.entryType,
            initiatorType: entry.initiatorType,
            size: entry.transferSize || 0,
            decodedSize: entry.decodedBodySize || 0,
            encodedSize: entry.encodedBodySize || 0,
            transferSize: entry.transferSize || 0,
            cached: this.isCachedResource(entry),
            // 判断资源加载状态
            status: entry.decodedBodySize === 0 &&
                entry.transferSize === 0 ? "error" : "success",
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

        this.resources.push(resource);
        // console.log(`资源加载: ${this.getResourceName(resource.name)}`,
        //     resource.duration, `是否是缓存资源: ${resource.cached}`);
        this.sdk.capture(this.name, {
            type: "resource",
            resource
        })
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
}