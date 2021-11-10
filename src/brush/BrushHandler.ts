import eventBus from "../basic/EventBus";
import IBrush from "../interfaces/IBrush";
import EventResolver from "../basic/EventResolver";


export default abstract class BrushHandler {
    private static brush: IBrush;

    static init() {
        /*eventBus.subscribe('canvas-mousemove', p => this.brush.onMove(p))
        eventBus.subscribe('canvas-mousedown', p => this.brush.onDown(p))
        eventBus.subscribe('canvas-mousedown', p => this.brush.onDown(p))
        eventBus.subscribe('canvas-mouseup', p => this.brush.onUp(p))
        eventBus.subscribe('canvas-mouseout', p => this.brush.onMouseOut())*/

        EventResolver.register('canvas-mousemove', p => this.brush.onMove(p))
        EventResolver.register('canvas-mousedown', p => this.brush.onDown(p))
        EventResolver.register('canvas-mousedown', p => this.brush.onDown(p))
        EventResolver.register('canvas-mouseup', p => this.brush.onUp(p))
        EventResolver.register('canvas-mouseout', p => this.brush.onMouseOut())
    }
    static setBrush(brush: IBrush) {
        this.brush = brush
    }
}