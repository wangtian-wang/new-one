//手写的事件总线


const eventBus = {
    callBacks: {

    }
};
eventBus.on = function (eventType, cb) {
    if (!this.callBacks[eventType]) {
        this.callBacks[eventType] = [cb]
    } else {
        this.callBacks[eventType].push(cb)
    }
};
eventBus.emit = function (eventType, data) {
    if (this.callBacks[eventType] && this.callBacks[eventType].length > 0) {
        this.callBacks[eventType].forEach(fn => {
            fn.call(this,data)
        });
    }
}
eventBus.off = function (eventname) {
    if (!eventname) {
        this.callBacks = {}
    } else {
        delete this.callBacks[eventname]
    }
    
}


