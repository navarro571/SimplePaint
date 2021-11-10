import IBrush from '../../interfaces/IBrush';
import Canvas from "../../canvas/Canvas";
import CanvasRender from "../../canvas/CanvasRender";
import LineRenderElement from "../../canvas/elements/LineRenderElement";
import { getColor, getLineWidth } from "../../UI/UISettings";

class DefaultBrush implements IBrush {
    private isPaiting: Boolean = false;
    private render: CanvasRender;
    private line: LineRenderElement;

    constructor(render: CanvasRender) {
        this.render = render;
    }

    onDown({event:e, context}) {
        this.isPaiting = true;
        this.line = new LineRenderElement();
        this.line.points.push({ x: e.offsetX, y: e.offsetY });
        this.line.lineCap = 'round';
        this.line.color = getColor();
        this.line.lineWidth = getLineWidth();
        this.render.addElement(this.line);
    }

    onMove({event:e, context}) {
        if (!this.isPaiting) return;
        this.line.points.push({ x: e.offsetX, y: e.offsetY });
        this.render.render();
    }

    onUp({event:e, context}) {
        this.isPaiting = false;
    }
    onMouseOut() {
        this.isPaiting = false;
    }
}

export default DefaultBrush;