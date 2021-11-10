import EventResolver from "../utils/EventResolver";

export default abstract class CanvasMouseEvent {

    static init(canvas: HTMLCanvasElement) {
        canvas.addEventListener('mousedown',
                e => EventResolver.dispatch('canvas-mousedown', { e }));
        canvas.addEventListener('mousemove',
                e => EventResolver.dispatch('canvas-mousemove', { e }));
        canvas.addEventListener('mouseup',
                e => EventResolver.dispatch('canvas-mouseup', { e }));
        canvas.addEventListener('mouseout',
                e => EventResolver.dispatch('canvas-mouseout', { e }));
    }
}