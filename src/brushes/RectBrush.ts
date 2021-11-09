import IBrush from "../interfaces/IBrush";
import RectRenderElement from "../canvas/CanvasComponents/RectRenderElement";
import CanvasRender from "../canvas/CanvasRender";

class Vector2 {
    x: number;
    y: number;
}

class RectBrush implements IBrush {
    isPaiting: boolean;
    render: CanvasRender;
    rect: RectRenderElement;

    constructor(render: CanvasRender) {
        this.render = render;
    }
    onDown({event, context}: { event: any; context: any }) {
        this.isPaiting = true;

        this.rect = new RectRenderElement();
        this.rect.x = event.offsetX;
        this.rect.y = event.offsetY;
        this.rect.width = 0;
        this.rect.height = 0;
        this.rect.color = 'gray';
        this.rect.lineWidth = 10;
        this.render.addElement(this.rect);
    }
    onMove({event, context}: { event: any; context: any }) {
        if(!this.isPaiting) return;
        this.rect.height = event.offsetY - this.rect.y;
        this.rect.width = event.offsetX - this.rect.x;
        this.render.render();
    }

    onUp({event, context}: { event: any; context: any }) {
        context.stroke();
        this.isPaiting = false;
    }
    onMouseOut() { }

}
export default RectBrush;