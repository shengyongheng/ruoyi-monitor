import { RRWEB_RECORD_STOP_EVENT } from "@common/constants/rrweb";
import { EventBus } from "@common/eventBus/EventBus";
import { genRandomUUID } from "@common/utils/randomUUID";

// Vue2 集成插件
export class Vue2Plugin extends EventBus {
    name = "vue2"

    async install(sdk) {
        // TODO 暂时如此，待优化
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await sleep(0)
        this.globalErrorHandle(sdk)
    }

    uninstall() { }

    // 全局错误捕获
    globalErrorHandle(sdk) {
        const { Vue = null } = sdk.config;
        const self = this;
        // quit if Vue isn't on the page
        if (!Vue || !Vue.config) return;
        // 为什么这么做？
        var _oldOnError = Vue.config.errorHandler;
        Vue.config.errorHandler = function VueErrorHandler(error, vm, info) {

            const id = genRandomUUID();
            sdk.capture(self.name, {
                type: "globalError",
                id,
                message: error.message,
                errorType: error.name,
                stack: error.stack,
                // vm,
                component: vm?.$options?.name,
                file: vm?.$options.__file,
                info
            });
            self.emit(RRWEB_RECORD_STOP_EVENT, {
                id, sdk
            })
            // ...
            if (typeof _oldOnError === 'function') {
                // 为什么这么做？
                _oldOnError.call(this, error, vm, info);
            }
        };
    }
}