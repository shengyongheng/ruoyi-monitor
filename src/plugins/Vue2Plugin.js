
export class Vue2Plugin {

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
        // quit if Vue isn't on the page
        if (!sdk.Vue || !sdk.Vue.config) return;
        // 为什么这么做？
        var _oldOnError = sdk.Vue.config.errorHandler;
        sdk.Vue.config.errorHandler = function VueErrorHandler(error, vm, info) {
            sdk.capture("errorTracking", {
                type: "vue",
                data: {
                    error,
                    vm,
                    info
                }
            });
            // ...
            if (typeof _oldOnError === 'function') {
                // 为什么这么做？
                _oldOnError.call(this, error, vm, info);
            }
        };
    }
}