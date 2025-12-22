import { record } from "rrweb";

let eventsMatrix = [[]];
let stopRecord = null;

export function start() {
    // 重置状态
    eventsMatrix = [[]];

    // 开始录制
    stopRecord = record({
        emit(event, isCheckout) {
            // isCheckout 是一个标识，告诉你重新制作了快照
            // isCheckout is a flag to tell you the events has been checkout
            if (isCheckout) {
                eventsMatrix.push([]);
            }
            const lastEvents = eventsMatrix[eventsMatrix.length - 1];
            lastEvents.push(event);
        },
        checkoutEveryNms: 5 * 1000, // 每5s重新制作快照
        // checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
    });
}

export function stop(data) {
    const { id = null, sdk = null } = data;
    if (!stopRecord) return;
    // 停止录制
    stopRecord();
    stopRecord = null;
    sdk?.capture("rrweb", {
        id,
        events: JSON.stringify(eventsMatrix[eventsMatrix.length - 2] ? eventsMatrix[eventsMatrix.length - 2].concat(
            eventsMatrix[eventsMatrix.length - 1]
        ) : eventsMatrix[eventsMatrix.length - 1])
    });
    start();
}