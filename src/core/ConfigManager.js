import { generateSessionId } from "@common/utils/genSessionId";
import { genRandomUUID } from "@common/utils/randomUUID";
export class ConfigManager {
    defaultConfig = {
        appId: '',
        appVersion: '1.0.0',
        debug: false,
        enabled: true,
        dsnInfo: {
            protocol: "", // 协议
            host: "", // 域
            publicKey: "", // SDK 使用的公钥（可公开）
            projectKey: "", // 对外暴露的 projectId（短 ID）
            params: {}
        },
        reportUrl: "",
        reportStrategy: 'immediate', // immediate batch throttle
        batchSize: 5,
        reportInterval: 10000, // 延迟上报时间 reportStrategy 为 batch throttle 时有效
        maxQueueSize: 100,
        sampleRate: 1,
        errorSampleRate: 1,
        performanceSampleRate: 0.1,
        user: {
            userId: genRandomUUID(),
            username: "游客"
        },
        sessionId: "", // 会话 id
        plugins: [],
        hooks: {}
    };

    mergeConfig(userConfig) {
        const merged = { ...this.defaultConfig, ...userConfig };

        // // 环境特定配置
        // if (typeof window !== 'undefined') {
        //     merged.reportUrl = merged.reportUrl || '/monitoring/report';
        // }

        // 初始化 sessionId
        merged.sessionId = generateSessionId();

        // 验证必要配置
        this.validateConfig(merged);

        return merged;
    }

    validateConfig(config) {
        // if (!config.appId) {
        //     throw new Error('appId is required');
        // }

        if (config.sampleRate < 0 || config.sampleRate > 1) {
            throw new Error('sampleRate must be between 0 and 1');
        }
    }
}