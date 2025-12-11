// 数据处理层 - 数据处理器
export class DataProcessor {
    // config: SDKConfig;
    // transformers: Map<string, DataTransformer> = new Map();

    constructor(config) {
        this.config = config;
        this.registerTransformers();
    }

    init() { }

    async process(event) {
        // 数据清洗
        let cleanedEvent = this.cleanData(event);

        // 数据脱敏
        cleanedEvent = this.maskSensitiveData(cleanedEvent);

        // 数据转换
        cleanedEvent = await this.transformData(cleanedEvent);

        // 数据采样
        if (!this.shouldSample(cleanedEvent)) {
            return null;
        }

        return cleanedEvent;
    }

    cleanData(event) {
        // 移除undefined和null值
        const cleanData = (obj) => {
            if (obj === null || obj === undefined) return undefined;

            if (Array.isArray(obj)) {
                return obj.map(cleanData).filter(item => item !== undefined);
            }

            if (typeof obj === 'object') {
                const cleaned = {};
                for (const [key, value] of Object.entries(obj)) {
                    const cleanedValue = cleanData(value);
                    if (cleanedValue !== undefined) {
                        cleaned[key] = cleanedValue;
                    }
                }
                return cleaned;
            }

            return obj;
        };

        return {
            ...event,
            data: cleanData(event.data)
        };
    }

    maskSensitiveData(event) {
        const sensitiveFields = ['password', 'token', 'authorization', 'cookie'];

        const maskData = (obj) => {
            if (typeof obj !== 'object' || obj === null) return obj;

            if (Array.isArray(obj)) {
                return obj.map(maskData);
            }

            const masked = {};
            for (const [key, value] of Object.entries(obj)) {
                if (sensitiveFields.some(field =>
                    key.toLowerCase().includes(field.toLowerCase())
                )) {
                    masked[key] = '***';
                } else {
                    masked[key] = maskData(value);
                }
            }
            return masked;
        };

        return {
            ...event,
            data: maskData(event.data)
        };
    }

    async transformData(event) {
        const transformer = this.transformers.get(event.eventType);
        if (transformer) {
            return await transformer.transform(event);
        }
        return event;
    }

    shouldSample(event) {
        const sampleRate = this.getSampleRate(event.eventType);
        return Math.random() <= sampleRate;
    }

    getSampleRate(eventType) {
        switch (eventType) {
            case 'error':
                return this.config.errorSampleRate;
            case 'performance':
                return this.config.performanceSampleRate;
            default:
                return this.config.sampleRate;
        }
    }

    registerTransformers() {
        this.transformers.set('error', new ErrorTransformer());
        this.transformers.set('performance', new PerformanceTransformer());
        this.transformers.set('userAction', new UserActionTransformer());
    }
}