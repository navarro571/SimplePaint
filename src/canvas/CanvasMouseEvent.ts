import eventBus from "../basic/EventBus"
import EventResolver from "../basic/EventResolver";

export default abstract class CanvasMouseEvent {

    private static context: CanvasRenderingContext2D;

    static init(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        CanvasMouseEvent.context = context;
        canvas.addEventListener('mousedown', CanvasMouseEvent.dispatchEvent)
        canvas.addEventListener('mousemove',  CanvasMouseEvent.dispatchEvent);
        canvas.addEventListener('mouseup',  CanvasMouseEvent.dispatchEvent);
        canvas.addEventListener('mouseout',  CanvasMouseEvent.dispatchEvent);
    }

    private static dispatchEvent = (e: MouseEvent) => {
        // eventBus.dispatch('canvas-' + e.type, { event: e, context: CanvasMouseEvent.context })
        EventResolver.dispatch('canvas-' + e.type, { event: e, context: CanvasMouseEvent.context })
    }
}