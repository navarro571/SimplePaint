import RectRenderElement from "../canvas/CanvasComponents/RectRenderElement";

export default interface IRender {
    render(object: object, context: CanvasRenderingContext2D);
}