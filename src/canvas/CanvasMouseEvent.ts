import eventBus from "../basic/EventBus"

export default class CanvasMouseEvent {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private painting: boolean

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.context = context 
    }

    set(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.context = context
    }

    start() {
        this.canvas.addEventListener('mousedown', this.dispatchEvent)
        this.canvas.addEventListener('mousemove', this.dispatchEvent);
        this.canvas.addEventListener('mouseup', this.dispatchEvent);
        this.canvas.addEventListener('mouseout', this.dispatchEvent);
    }

    stop() {
        this.canvas.removeEventListener('mousedown', this.dispatchEvent)
        this.canvas.removeEventListener('mousemove', this.dispatchEvent);
        this.canvas.removeEventListener('mouseup', this.dispatchEvent);
        this.canvas.removeEventListener('mouseout', this.dispatchEvent);
    }
    dispatchEvent = (e: MouseEvent) =>{
        eventBus.dispatch('canvas-' + e.type, { event: e, context: this.context })
    }
}