import IBrush from '../../interfaces/IBrush';
import {getColor, getLineWidth, isFill} from "../../UI/UISettings";
import Vector2 from "../../utils/Vector2";

class Circle implements IBrush {
    private isPaiting: Boolean = false;
    private startPos: Vector2 = new Vector2();
    private imageData: ImageData;

    onMouseDown(e, ctx) {
        this.isPaiting = true;
        ctx.lineCap = 'round';
        ctx.strokeStyle = getColor();
        ctx.fillStyle = getColor();
        ctx.lineWidth = getLineWidth();
        this.startPos = { x: e.offsetX, y: e.offsetY };
        this.imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    onMouseMove(e, ctx) {
        if (!this.isPaiting) return;
        ctx.putImageData(this.imageData, 0, 0);
        ctx.beginPath();
        ctx.arc(this.startPos.x, this.startPos.y, Math.sqrt(((this.startPos.x - e.offsetX)**2) + ((this.startPos.y - e.offsetY)**2)), 0, 2 * Math.PI, false);
        isFill() ? ctx.fill() : ctx.stroke();
    }

    onMouseUp(e, ctx) {
        this.isPaiting = false;
        ctx.closePath();
    }

    onMouseOut(e, ctx) {
        this.isPaiting = false;
        ctx.closePath();
    }
}

export default Circle;