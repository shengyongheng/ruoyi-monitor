// 用户行为插件
export class UserBehaviorPlugin {
    name = 'userBehavior';



    install(sdk) {
        // 页面停留时长监控
        {
            let enterTime = Date.now();

            document.addEventListener('visibilitychange', this.trackPageStayTime.bind(this, sdk, enterTime), true);
        }

        // 处理用户点击事件
        {
            document.addEventListener('click', this.trackClickBehavior.bind(this, sdk), true);
        }

        // 处理用户输入事件
        {
            document.addEventListener('input', this.trackInputBehavior.bind(this, sdk), true);
        }
    }

    // 移除事件监听
    uninstall() {
        document.removeEventListener("visibilitychange", this.trackPageStayTime.bind(this), true)
        document.removeEventListener('click', this.trackClickBehavior.bind(this, sdk), true);
        document.removeEventListener('input', this.trackInputBehavior.bind(this, sdk), true);
      
    }

    trackPageStayTime(sdk, enterTime) {
        // console.log(arguments);
        if (document.visibilityState === 'hidden') {
            const stayTime = Date.now() - enterTime;
            sdk.capture('userAction', {
                id: genRandomUUID(),
                type: 'pageStay',
                stayTime
            });
        } else {
            enterTime = Date.now();
        }
    }

    // 处理用户点击事件
    trackClickBehavior(sdk, e) {
        const target = e.target;
        let description = `点击了 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.className) description += ` .${target.className}`;
        if (target.textContent && target.textContent.length < 30) {
            description += ` (${target.textContent.trim()})`;
        }
        sdk.capture('userAction', {
            id: genRandomUUID(),
            type: 'click',
            data: {
                description
            }
        });
    }

    // 处理用户输入事件
    trackInputBehavior(sdk, e) {
        const target = e.target;
        let description = `在 ${target.tagName}`;

        if (target.id) description += ` #${target.id}`;
        if (target.placeholder) description += ` [${target.placeholder}]`;

        description += ` 输入: "${target.value}"`;

        sdk.capture('userAction', {
            id: genRandomUUID(),
            type: 'input',
            data: {
                description
            }
        });
    }

    // 处理用户滚动事件

    // 处理页面卸载事件
}