import RectRenderElement from "../canvas/elements/RectRenderElement";

export default interface IRender {
    render(object: object, context: CanvasRenderingContext2D);
}