import eventBus from "../basic/EventBus";
import IBrush from "../interfaces/IBrush";
import brushList from "./BrushList";


export default class BrushHandler {
    private brush: IBrush;
    private static Instance: BrushHandler

    constructor() {
        eventBus.subscribe('canvas-mousemove', p => this.brush.onMove(p))
        eventBus.subscribe('canvas-mousedown', p => this.brush.onDown(p))
        eventBus.subscribe('canvas-mouseup', p => this.brush.onUp(p))
        eventBus.subscribe('canvas-mouseout', p =>this.brush.onMouseOut())
    }

    static getInstance(): BrushHandler {
        if (BrushHandler.Instance) {
            return BrushHandler.Instance
        }
        BrushHandler.Instance = new BrushHandler()
        return BrushHandler.Instance
    }
    setBrush(brush: IBrush) {
        this.brush = brush
    }
}