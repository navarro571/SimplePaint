import Canvas from "./canvas/Canvas";
import BrushHandler from "./brush/BrushHandler";
import CanvasMouseEvent from "./canvas/CanvasMouseEvent";
import DefaultBrush from "./brush/brushes/DefaultBrush";
import ButtonHandler from './butons/ButtonHandler';
import RectBrush from "./brush/brushes/RectBrush";
import CanvasRender from "./canvas/CanvasRender";
import RectRender from "./canvas/renders/RectRender";
import LineRender from "./canvas/renders/LineRender";
import LineRenderElement from "./canvas/elements/LineRenderElement";
import RectRenderElement from "./canvas/elements/RectRenderElement";
import IRender from "./interfaces/IRender";
import './style.css';
import EventResolver from "./basic/EventResolver";

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



