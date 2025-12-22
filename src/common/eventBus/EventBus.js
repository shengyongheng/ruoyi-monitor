export class EventBus {
    static _events = new Map();

    constructor() {
        // 使用 Map 存储事件与回调列表
        // key: eventName, value: Set<handler>
        // this._events = new Map();
    }

    // 订阅事件
    on(event, handler) {
        if (!EventBus._events.has(event)) {
            EventBus._events.set(event, new Set());
        }
        EventBus._events.get(event).add(handler);
    }

    // 取消订阅
    off(event, handler) {
        if (!EventBus._events.has(event)) return;
        const handlers = EventBus._events.get(event);
        handlers.delete(handler);

        // 若此事件无监听者则自动清理
        if (handlers.size === 0) {
            EventBus._events.delete(event);
        }
    }

    // 发布事件
    emit(event, data) {
        if (!EventBus._events.has(event)) return;
        const handlers = EventBus._events.get(event);

        for (const handler of handlers) {
            handler(data);
        }
    }

    // 一次性订阅
    once(event, handler) {
        const wrapper = (data) => {
            handler(data);
            this.unsubscribe(event, wrapper);
        };
        this.subscribe(event, wrapper);
    }
}
