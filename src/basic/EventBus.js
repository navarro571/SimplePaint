class EventBus {
    constructor() {
        this.event = {}
    }
    subscribe(eventName, callback) {
        if (!this.event[eventName]) {
            this.event[eventName] = []
        }
        let index = this.event[eventName].indexOf(callback)
        if (index > -1) return
        this.event[eventName].push(callback)
    }
    unSubscribe(eventName, callback) {
        if (!this.event[eventName]) return
        let index = this.event[eventName].indexOf(callback)
        if (index > -1) this.event[eventName].splice(index, 1)
    }
    dispatch(eventName, payload) {
        if (!this.event[eventName]) return
        this.event[eventName].forEach(cb => cb(payload));
        // console.log(Object.keys(this.event).length, this.event[eventName]);
    }
}

const eventBus = new EventBus()

export default eventBus
export { EventBus }