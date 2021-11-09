import BrushesSettings from "./brushesSetting";
import IBrush from "./interfaces/IBrush";

export default class App {
    settings: BrushesSettings;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    private static Instance: App

    static getInstance(): App{
        if(App.Instance){
            return App.Instance
        }
        App.Instance = new App()
        return App.Instance 
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }


    
}