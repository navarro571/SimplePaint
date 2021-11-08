import IBrush from '../interfaces/IBrush';

class DefaultBrush implements IBrush {
    private isPaiting: Boolean = false;

    onDown(context, e: MouseEvent) {
        this.isPaiting = true;
        context.beginPath();
        this.onMove(context, e);
    }

    onMove(context, e: MouseEvent) {
        if (!this.isPaiting) return;
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.strokeStyle = 'red';
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }

    onUp(context, e: MouseEvent) {
        this.isPaiting = false;
    }
    onMouseOut() {
        this.isPaiting = false;
    }

}

export default DefaultBrush;