import eventBus from "../basic/EventBus";
import IBrush from "../interfaces/IBrush";


export default abstract class BrushHandler {
    private static brush: IBrush;

    static init() {
        eventBus.subscribe('canvas-mousemove', p => this.brush.onMove(p))
        eventBus.subscribe('canvas-mousedown', p => this.brush.onDown(p))
        eventBus.subscribe('canvas-mouseup', p => this.brush.onUp(p))
        eventBus.subscribe('canvas-mouseout', p =>this.brush.onMouseOut())
    }
    static setBrush(brush: IBrush) {
        this.brush = brush
    }
}