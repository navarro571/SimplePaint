import IBrush from '../../interfaces/IBrush';
import {getColor, getLineWidth, isFill} from "../../UI/UISettings";
import Vector2 from "../../utils/Vector2";

class Pencil implements IBrush {
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
        ctx.rect(this.startPos.x, this.startPos.y, e.offsetX - this.startPos.x, e.offsetY - this.startPos.y);
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

export default Pencil;