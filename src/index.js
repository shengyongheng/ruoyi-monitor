import { MonitoringCore } from "@core/core";
// import { EnvironmentInfoPlugin } from "@plugins/EnvironmentInfoPlugin";
// import { ErrorTrackingPlugin } from "@plugins/ErrorTrackingPlugin";
// import { PerformancePlugin } from "@plugins/PerformancePlugin";
// import { ResourcePlugin } from "@plugins/ResourcePlugin";
import { UserBehaviorPlugin } from "@plugins/UserBehaviorPlugin";
// import { Vue2Plugin } from "@plugins/Vue2Plugin";

const RuoyiMonitor = new MonitoringCore({
    // appId: "abc",
    plugins: [
        // new Vue2Plugin(),
        // new PerformancePlugin(),
        // new ResourcePlugin(),
        new UserBehaviorPlugin(),
        // new EnvironmentInfoPlugin(),
        // new ErrorTrackingPlugin(),
    ]
})

// RuoyiMonitor.init({})

export {
    RuoyiMonitor
};

