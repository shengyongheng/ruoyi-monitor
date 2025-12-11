// 用户行为插件
export class UserBehaviorPlugin {
    name = 'userBehavior';

    install(sdk) {
        this.trackPageStayTime(sdk);
        // this.trackScrollBehavior(sdk);
    }

    trackPageStayTime(sdk) {

        let enterTime = Date.now();

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                const stayTime = Date.now() - enterTime;
                sdk.capture('userAction', {
                    type: 'pageStay',
                    stayTime
                });
            } else {
                enterTime = Date.now();
            }
        });
    }
}