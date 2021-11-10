import IBrush from "../interfaces/IBrush";
import EventResolver from "../utils/EventResolver";


export default abstract class BrushHandler {
    private static brush: IBrush;
    private static ctx: CanvasRenderingContext2D;

    static init(ctx: CanvasRenderingContext2D) {
        EventResolver.register('canvas-mousemove', p => this.brush.onMouseMove(p.e, ctx));
        EventResolver.register('canvas-mousedown', p => this.brush.onMouseDown(p.e, ctx));
        EventResolver.register('canvas-mouseup', p => this.brush.onMouseUp(p.e, ctx));
        EventResolver.register('canvas-mouseout', p => this.brush.onMouseOut(p.e, ctx));
    }
    static setBrush(brush: IBrush) {
        this.brush = brush;
    }
    static setContext(ctx: CanvasRenderingContext2D){
        BrushHandler.ctx = ctx;
    }
}