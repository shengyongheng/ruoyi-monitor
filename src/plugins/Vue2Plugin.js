import { RRWEB_RECORD_STOP_EVENT } from "@common/constants/rrweb";
import { EventBus } from "@common/eventBus/EventBus";
import { genRandomUUID } from "@common/utils/randomUUID";

// Vue2 集成插件
export class Vue2Plugin extends EventBus {
    name = "vue2Plugin"

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
        const self = this;
        // quit if Vue isn't on the page
        if (!sdk.Vue || !sdk.Vue.config) return;
        // 为什么这么做？
        var _oldOnError = sdk.Vue.config.errorHandler;
        sdk.Vue.config.errorHandler = function VueErrorHandler(error, vm, info) {
            const id = genRandomUUID();
            sdk.capture("errorTracking", {
                type: "vue2",
                data: {
                    id,
                    error,
                    vm,
                    info
                }
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