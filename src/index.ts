import Canvas from "./canvas/Canvas";
import App from "./app";
import BrushHandler from "./brushes/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import DefaultBrush from "./brushes/DefaultBrush";
import GreenBrush from "./brushes/GreenBrush";
import ButtonHandler from './butons/ButtonHandler';
import './style.css';
import RectBrush from "./brushes/RectBrush";

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const canvas = new Canvas(htmlCanvas, { height: 800, width: 600 });
const brushHandler = BrushHandler.getInstance()
let pincel1 = new DefaultBrush();
let pincel2 = new GreenBrush();
let pincel3 = new RectBrush();

brushHandler.setBrush(pincel2)//temporalmente

let buttonHandler = new ButtonHandler()
buttonHandler.registerButton(document.querySelector('#red'), pincel1)
buttonHandler.registerButton(document.querySelector('#green'), pincel2)
buttonHandler.registerButton(document.querySelector('#rect-brush'), pincel3)


const canvasMouseEvent = new CanvasMouseEvent(canvas.canvas, canvas.context)
canvasMouseEvent.start()


