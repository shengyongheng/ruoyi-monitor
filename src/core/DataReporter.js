// 数据上报层 - 上报管理器
export class DataReporter {
    // private queue: MonitoringEvent[] = [];

    constructor(config) {
        this.config = config;
        this.queue = [];
        this.timer = null;
        this.isReporting = false
    }

    get sendHeaders() {
        return {
            "Content-Type": 'application/json',
            'Ruoyi-monitor-SDK-Key': this.config.dsnInfo.publicKey
        }
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
            projectKey: this.config.dsnInfo.projectKey,
            appVersion: this.config.appVersion,
            events
        };
        console.log("payload:", payload);
        // 使用多种方式上报，提高成功率
        await Promise.race([
            // this.sendBeacon(payload),
            // this.sendFetch(payload),
            this.sendXHR(payload)
        ]);
    }

    async sendBeacon(payload) {
        if (!navigator.sendBeacon) return false;

        const blob = new Blob([JSON.stringify(payload)], this.sendHeaders);

        return navigator.sendBeacon(this.config.reportUrl, blob);
    }

    async sendFetch(payload) {
        try {
            const response = await fetch(this.config.reportUrl, {
                method: 'POST',
                headers: this.sendHeaders,
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
            xhr.setRequestHeader('Ruoyi-monitor-SDK-Key', this.config.dsnInfo.publicKey);

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