abstract class EventResolver{
    static register(name: string, callback: any): void {
        if(!this[name]) this[name] = new Array();
        this[name].push(callback);
    }
    static unregister(name, callback): void {
        if(!this[name]) return;
        this[name].splice(this[name].indexOf(callback), 1);
    }
    static dispatch(name, payload): void {
        if(!this[name]) return;
        this[name].forEach(cb => cb(payload));
    }
}

export default EventResolver;
