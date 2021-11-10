import IRender from "../../interfaces/IRender";
import LineRenderElement from "../CanvasComponents/LineRenderElement";

export default class LineRender implements IRender{
    render(object: LineRenderElement, context: CanvasRenderingContext2D) {
        context.beginPath();
        context.lineWidth = object.lineWidth || 10;
        context.strokeStyle = object.color || 'red';
        context.lineCap = object.lineCap;
        for (let i = 0; i < object.points.length; i++) {
            context.lineTo(object.points[i].x, object.points[i].y);
            context.stroke();
            context.beginPath();
            context.moveTo(object.points[i].x, object.points[i].y);
        }
    }

}