/*
class CanvasSetting {
    color;
    brushSize;
    opacity;
}

interface brush{
    onDown(e: MouseEvent, settings: CanvasSetting),
    onMove(e: MouseEvent, settings: CanvasSetting),
    onUp(e: MouseEvent, settings: CanvasSetting)
}

class Canvas {
    private brushes: brush[];
    private currentBrush;
    private canvas: HTMLCanvasElement;
    private canvasSettings: CanvasSetting;

    constructor(canvas: HTMLCanvasElement, settings: CanvasSetting) {
        this.canvas = canvas;
        this.canvas.addEventListener('mousedown', this.mousedown);
        this.canvas.addEventListener('mousemove', this.mousemove);
        this.canvas.addEventListener('mouseup', this.mouseup);
        this.canvasSettings = settings;
    }
    registerBrush(b: brush){
        this.brushes.push(b);
    }
    mousedown(e: MouseEvent) {
        this.currentBrush.onDown(e, this.canvasSettings);
    }

    mousemove(e: MouseEvent) {
        this.currentBrush.onMove(e, this.canvasSettings);
    }
    mouseup(e: MouseEvent) {
        this.currentBrush.onUp(e, this.canvasSettings);
    }

}
export default Canvas;

export{
    brush,
    CanvasSetting
}
*/
