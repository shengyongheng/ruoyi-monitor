import { MonitoringCore } from "@core/core";
import { EnvironmentInfoPlugin } from "@plugins/EnvironmentInfoPlugin";
import { PerformancePlugin } from "@plugins/PerformancePlugin";
import { UserBehaviorPlugin } from "@plugins/UserBehaviorPlugin";

new MonitoringCore({
    appId: "abc",
})
    .use(new PerformancePlugin())
    .use(new UserBehaviorPlugin())
    .use(new EnvironmentInfoPlugin());
