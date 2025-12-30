import { debounce } from "lodash";
// 用户行为插件
export class UserBehaviorPlugin {
    name = 'userBehavior';
    sdk = null;
    enterTime = Date.now();
    from = location.href;
    hashEnterTime = 0;
    trackDebounceScrollBehavior = null;

    constructor() {
        this.trackDebounceScrollBehavior = debounce(this.scrollBehavior.bind(this), 200)
    }

    install(sdk) {
        this.sdk = sdk
        /**
         * MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event
         * 备注：
         *  popstate 事件在调用浏览器的前进、后退以及执行 history.forward、history.back、和 history.go 触发。
         *  即，在同一文档的两个历史记录条目之间导航会触发该事件。
         *  调用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件。
         */
        this.patchHistoryApi();

        // 页面停留时长监控
        {
            document.addEventListener('visibilitychange', this.trackPageStayTime.bind(this), true);
        }

        // 处理用户点击事件
        {
            document.addEventListener('click', this.trackClickBehavior.bind(this), true);
        }

        // 处理用户输入事件
        {
            document.addEventListener('input', this.trackInputBehavior.bind(this), true);
        }

        // 处理用户滚动事件
        {
            document.addEventListener('scroll', this.trackDebounceScrollBehavior, true);
        }

        // 处理页面卸载事件
        {
            window.addEventListener("unload", this.trackPageUnload.bind(this), true)
        }

        // 浏览器前进后退、history.go/back/forward 触发
        {
            window.addEventListener('popstate', this.trackHistoryChange.bind(this, "popstate"), true);
        }

        // 处理页面 hash 变化
        {
            window.addEventListener('hashchange', this.trackHashChange.bind(this), true);
        }
    }

    // 移除事件监听
    uninstall() {
        document.removeEventListener("visibilitychange", this.trackPageStayTime.bind(this), true)
        document.removeEventListener('click', this.trackClickBehavior.bind(this), true);
        document.removeEventListener('input', this.trackInputBehavior.bind(this), true);
        document.removeEventListener('scroll', this.trackDebounceScrollBehavior, true);

    }

    patchHistoryApi() {
        const self = this;
        const originPushState = history.pushState;
        const originReplaceState = history.replaceState;

        history.pushState = function (...args) {
            originPushState.apply(history, args);
            self.trackHistoryChange('pushState');
        };

        history.replaceState = function (...args) {
            originReplaceState.apply(history, args);
            self.trackHistoryChange('replaceState');
        };

    }

    trackPageStayTime() {
        if (document.visibilityState === 'hidden') {
            const stayTime = Date.now() - this.enterTime;
            this.sdk.capture(this.name, {
                type: 'pageStay',
                stayTime
            });
        } else {
            this.enterTime = Date.now();
        }
    }

    // 处理用户点击事件
    trackClickBehavior(e) {
        const target = e.target;
        let description = `点击了 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.className) description += ` .${target.className}`;
        if (target.textContent && target.textContent.length < 30) {
            description += ` (${target.textContent.trim()})`;
        }
        this.sdk.capture(this.name, {
            type: 'click',
            description
        });
    }

    // 处理用户输入事件
    trackInputBehavior(e) {
        const target = e.target;
        let description = `在 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.placeholder) description += ` [${target.placeholder}]`;

        description += ` 输入: "${target.value}"`;

        this.sdk.capture(this.name, {
            type: 'input',
            description
        });
    }

    // 处理用户滚动事件
    scrollBehavior() {
        const e = arguments[0];
        const target = e.target;

        let description = `滚动了 ${target.tagName}`;
        if (target.id) description += ` #${target.id}`;
        if (target.className) description += ` .${target.className}`;
        if (target.textContent && target.textContent.length < 30) {
            description += ` (${target.textContent.trim()})`;
        }
        this.sdk.capture(this.name, {
            type: "scroll",
            description
        })
    }

    trackPageUnload(e) {
        console.log("处理页面卸载事件:", e);
    }

    trackHistoryChange(trigerType) {
        this.sdk.capture(this.name, {
            type: "history",
            trigerType: trigerType,
            oldUrl: this.from,
            newUrl: location.href,
        })
        this.from = location.href
    }

    trackHashChange(e) {
        this.sdk.capture(this.name, {
            type: "hashchange",
            oldUrl: e.oldURL,
            newUrl: e.newURL,
            hashStayTime: e.timeStamp - this.hashEnterTime
        })
        this.hashEnterTime = e.timeStamp;
    }
}