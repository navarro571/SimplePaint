import Canvas from "./canvas/Canvas";
import App from "./app";
import BrushHandler from "./brushes/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import DefaultBrush from "./brushes/DefaultBrush";
import GreenBrush from "./brushes/GreenBrush";
import ButtonHandler from './butons/ButtonHandler';

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const canvas = new Canvas(htmlCanvas, { height: 800, width: 600 });
const brushHandler = BrushHandler.getInstance()
let pincel1 = new DefaultBrush()
let pincel2 = new GreenBrush()

brushHandler.setBrush(pincel2)//temporalmente

let buttonHandler = new ButtonHandler()
buttonHandler.registerButton(document.querySelector('#red'), pincel1)
buttonHandler.registerButton(document.querySelector('#green'), pincel2)


const canvasMouseEvent = new CanvasMouseEvent(canvas.canvas, canvas.context)
canvasMouseEvent.start()


