import BrushesSettings from "./brushesSetting";
import IBrush from "./interfaces/IBrush";

export default class App {
    settings: BrushesSettings;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    brush: IBrush;


    start() {
        this.stop()
        this.canvas.addEventListener('mousedown', this.onDown);
        this.canvas.addEventListener('mousemove', this.onMove);
        this.canvas.addEventListener('mouseup', this.onUp);
        this.canvas.addEventListener('mouseout', this.onMouseOut);
    }
    stop() {
        this.canvas.removeEventListener('mousedown', this.onDown);
        this.canvas.removeEventListener('mousemove', this.onMove);
        this.canvas.removeEventListener('mouseup', this.onUp);
        this.canvas.removeEventListener('mouseout', this.onMouseOut);
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    setBrush(brush: IBrush){
        this.brush = brush;
    }

    setBrushesSettings(newSettings) {
        this.settings = newSettings;
    }

    onDown = e => this.brush.onDown(this.context, e);
    onMove = e => this.brush.onMove(this.context, e);
    onUp = e => this.brush.onUp(this.context, e);
    onMouseOut = () => this.brush.onMouseOut();
}