import Canvas from "./canvas/Canvas";
import App from "./app";
import DefaultBrush from "./brushes/DefaultBrush";

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const app = new App();
const canvas = new Canvas(htmlCanvas, { height: 800, width: 600 });

const defaultBrush = new DefaultBrush();

app.setCanvas(htmlCanvas);
app.setBrush(defaultBrush);
app.start();