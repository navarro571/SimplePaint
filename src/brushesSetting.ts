export default class BrushesSettings {
    color;
    brushSize;
    opacity;

    constructor(color: string, brushSize: number, opacity: number) {
        this.color = color;
        this.brushSize = brushSize;
        this.opacity = opacity;
    }
}