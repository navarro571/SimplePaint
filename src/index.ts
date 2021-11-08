import Canvas from "./canvas/Canvas";
import App from "./app";
import brushList from "./brushes/BrushList"
import BrushHandler from "./brushes/BrushHandler";
import ColorSelector from "./UI/ColorSelector";

const htmlCanvas: HTMLCanvasElement = document.querySelector("canvas");

const app = new App();
const canvas = new Canvas(htmlCanvas, { height: 800, width: 600 });
const brushHandler = new BrushHandler()
brushHandler.setApp(app);
brushHandler.setBrushList(brushList);
let colorSelector = new ColorSelector();
colorSelector.start()

app.setCanvas(htmlCanvas);


