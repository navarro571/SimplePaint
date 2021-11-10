
class Canvas {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, size = { height: 800, width: 600 }) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');
        this._canvas.height = size.height;
        this._canvas.width = size.width;
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get context(): CanvasRenderingContext2D {
        return this._ctx;
    }

    resizeCanvas(height: number, width: number){
        const canvasData = this._ctx.getImageData(0, 0, this.canvas.width, this._canvas.height);
        this._canvas.height = height;
        this._canvas.width = width;
        this._ctx.putImageData(canvasData, 0, 0);
    }
}
export default Canvas;

