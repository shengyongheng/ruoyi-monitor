import { MonitoringCore } from "@core/core";
import { PerformancePlugin } from "@plugins/PerformancePlugin";
import { UserBehaviorPlugin } from "@plugins/UserBehaviorPlugin";

new MonitoringCore({
    appId: "abc",
})
    .use(new PerformancePlugin())
    .use(new UserBehaviorPlugin());
