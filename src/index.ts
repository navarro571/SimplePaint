import Canvas from "./canvas/Canvas";
import App from "./app";
import BrushHandler from "./brushes/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import DefaultBrush from "./brushes/DefaultBrush";
import GreenBrush from "./brushes/GreenBrush";
import ButtonHandler from './butons/ButtonHandler';
import './style.css';
import RectBrush from "./brushes/RectBrush";
import CanvasRender from "./canvas/CanvasRender";
import RectRender from "./canvas/Renders/RectRender";
import LineRender from "./canvas/Renders/LineRender";
import LineRenderElement from "./canvas/CanvasComponents/LineRenderElement";
import RectRenderElement from "./canvas/CanvasComponents/RectRenderElement";
import IRender from "./interfaces/IRender";


//render list
const renders = new Map<any, IRender>();
renders.set(LineRenderElement, new LineRender())
renders.set(RectRenderElement, new RectRender())

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const canvas = new Canvas(htmlCanvas, { height: 800, width: 600 });

//rendering system start
const render = new CanvasRender(renders, canvas.context);
// render.addElement(new LineRenderElement())
// render.addElement(new RectRenderElement())
// render.addElement(new LineRenderElement())
//rendering system ends


const brushHandler = BrushHandler.getInstance()
let pincel1 = new DefaultBrush(render);
let pincel2 = new GreenBrush(render);
let pincel3 = new RectBrush(render);

brushHandler.setBrush(pincel2)//by default

let buttonHandler = new ButtonHandler()
buttonHandler.registerButton(document.querySelector('#red'), pincel1)
buttonHandler.registerButton(document.querySelector('#green'), pincel2)
buttonHandler.registerButton(document.querySelector('#rect-brush'), pincel3)


const canvasMouseEvent = new CanvasMouseEvent(canvas.canvas, canvas.context)
canvasMouseEvent.start()


