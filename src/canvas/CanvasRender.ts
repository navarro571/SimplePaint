import IRender from "../interfaces/IRender";
import RectRenderElement from "./CanvasComponents/RectRenderElement";
import LineRender from "./Renders/LineRender";
import RectRender from "./Renders/RectRender";

export default class CanvasRender {
    renders: object;
    renderObjects: object[];
    tempObjects: object[];

    constructor(renders: object) {
    }

    tempRect(context: CanvasRenderingContext2D, object) {
        this.renders[object.constructor.name]();
    }

    rect(context: CanvasRenderingContext2D, object) {

    }
    line(context: CanvasRenderingContext2D, object) {

    }

    private render(){

    }
}