import eventBus from "../basic/EventBus";

export default class BrushHandler {
    private brushList: any
    private app: any

    constructor() {
        eventBus.subscribe('color-selection', this.setBrush)
    }
    setBrush = (brushName) => {
        if (!this.app) return;
        this.app.setBrush(this.brushList[brushName]);
        this.app.start()
    }
    setBrushList(brushList: any) {
        this.brushList = brushList
    }
    setApp(app: any) {
        this.app = app
    }
}