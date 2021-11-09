import IRender from "../../interfaces/IRender";
import RectRenderElement from "../CanvasComponents/RectRenderElement";

export default class RectRender implements IRender{
    render(object: RectRenderElement, context: CanvasRenderingContext2D) {
        context.strokeStyle = object.color || 'red';
        context.lineWidth = object.lineWidth || 10;
        context.strokeRect(object.x, object.y, object.width, object.height);
    }
}