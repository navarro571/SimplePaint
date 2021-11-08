// Import stylesheets
/*
import './style.css';
import Canvas, { CanvasSetting, brush } from './canvas/Canvas';

// Write TypeScript code!
const appDiv: HTMLCanvasElement = document.querySelector('#app');
appDiv.innerHTML = `<h1>TypeScript XD</h1>`;

const settings = new CanvasSetting();
const canvas = new Canvas(appDiv, settings);
//canvas.registerBrush();
*/

import Brush from "./canvas/Brush";
import Mouse from "./canvas/Mouse";


let canvas: HTMLCanvasElement = document.querySelector("canvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
// let painting: boolean = false;

const brush = new Brush(ctx)
const mouse = new Mouse(canvas)
mouse.setBursh(brush)
mouse.start()
// canvas.addEventListener('mousedown', startPosition)
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', finishedPosition);
// canvas.addEventListener('mouseout', finishedPosition);

// function startPosition(e) {
//     painting = true;
//     ctx.beginPath();
//     draw(e);
// }

// function draw(e: MouseEvent){
//     if(!painting) return;
//     ctx.lineWidth = 10;
//     ctx.lineCap = 'round';
//     ctx.strokeStyle = 'black';
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.offsetX, e.offsetY);
// }
// function finishedPosition(){
//     painting = false;
// }
