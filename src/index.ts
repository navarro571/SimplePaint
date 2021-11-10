import Canvas from "./canvas/Canvas";
import BrushHandler from "./brush/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import ButtonHandler from './UI/ButtonHandler';
import './style.css';
import Pencil from "./brush/brushes/Pencil";
import Rect from "./brush/brushes/Rect";
import Circle from "./brush/brushes/Circle";

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");
const resizeBtn : HTMLButtonElement = document.querySelector("#canvas-resize");
const resizeHeight: HTMLInputElement = document.querySelector("#canvas-resize-height");
const resizeWidth: HTMLInputElement = document.querySelector("#canvas-resize-width");

const canvas = new Canvas(htmlCanvas, { height: 900, width: 1600 });
const pencil = new Pencil();
const rect = new Rect();
const circle = new Circle();

ButtonHandler.registerButton(document.querySelector('#pencil-brush'), pencil);
ButtonHandler.registerButton(document.querySelector('#rect-brush'), rect);
ButtonHandler.registerButton(document.querySelector('#circle-brush'), circle);

CanvasMouseEvent.init(canvas.canvas);
BrushHandler.init(canvas.context);
BrushHandler.setBrush(pencil);

resizeBtn.onclick = () => canvas.resizeCanvas(parseInt(resizeHeight.value), parseInt(resizeWidth.value));



