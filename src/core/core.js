import { EventBus } from "@common/eventBus/EventBus";
import { parseDsn, validateDsn } from "@common/utils/dsn";
import { ConfigManager } from "./ConfigManager";
import { DataReporter } from "./DataReporter";

export class MonitoringCore extends EventBus {

    plugins = new Map();
    config = {}
    reporter = null;
    processor = null;

    constructor(config = {}) {
        super();
        this.config = config;
        this.state = {
            initialized: false,
            enabled: true,
            queue: []
        }
    }

    // 初始化SDK
    init(options = {}) {
        if (this.state.initialized) return;

        // 初始化配置
        const configManager = new ConfigManager();
        this.config = configManager.mergeConfig({ ...this.config, ...options });

        try {
            // 校验并解析 dsn
            validateDsn(this.config.dsn);
            const dsnInfo = parseDsn(this.config.dsn);

            this.config.dsnInfo = dsnInfo;

            // 设置上报地址
            this.config.reportUrl = dsnInfo.protocol + "://" + dsnInfo.host + "/ruoyi-monitor/report";

            // 注册内置插件
            // this.registerCorePlugins();

            // 初始化处理器和上报器
            // this.processor = new DataProcessor(this.config); // 数据处理器
            this.reporter = new DataReporter(this.config); // 上报器

            // this.processor.init();
            this.reporter.init();

            // 设置全局错误捕获
            // this.setupGlobalErrorHandling();

            // 初始化插件
            this.config.plugins.forEach(plugin => this.use(plugin))

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