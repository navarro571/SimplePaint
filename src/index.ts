import Canvas from "./canvas/Canvas";
import BrushHandler from "./brushes/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import DefaultBrush from "./brushes/DefaultBrush";
import ButtonHandler from './butons/ButtonHandler';
import RectBrush from "./brushes/RectBrush";
import CanvasRender from "./canvas/CanvasRender";
import RectRender from "./canvas/Renders/RectRender";
import LineRender from "./canvas/Renders/LineRender";
import LineRenderElement from "./canvas/CanvasComponents/LineRenderElement";
import RectRenderElement from "./canvas/CanvasComponents/RectRenderElement";
import IRender from "./interfaces/IRender";
import './style.css';

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const renders = new Map<any, IRender>();
renders.set(LineRenderElement, new LineRender());
renders.set(RectRenderElement, new RectRender());

const canvas = new Canvas(htmlCanvas, { height: 900, width: 1600 });
const render = new CanvasRender(renders, canvas.context);

const defaultBrush = new DefaultBrush(render);
const rectBrush = new RectBrush(render);
const buttonHandler = new ButtonHandler();

buttonHandler.registerButton(document.querySelector('#brush'), defaultBrush);
buttonHandler.registerButton(document.querySelector('#rect-brush'), rectBrush);

CanvasMouseEvent.init(canvas.canvas, canvas.context);

BrushHandler.init();
BrushHandler.setBrush(defaultBrush);


