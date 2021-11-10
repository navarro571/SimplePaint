import IBrush from '../../interfaces/IBrush';
import { getColor, getLineWidth } from "../../UI/UISettings";

class Pencil implements IBrush {
    private isPaiting: Boolean = false;

    onMouseDown(e, ctx) {
        this.isPaiting = true;
        ctx.lineCap = 'round';
        ctx.strokeStyle = getColor();
        ctx.fillStyle = getColor();
        ctx.lineWidth = getLineWidth();
        ctx.beginPath()
        this.onMouseMove(e, ctx);
    }

    onMouseMove(e, ctx) {
        if (!this.isPaiting) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
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