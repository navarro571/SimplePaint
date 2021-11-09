import IBrush from '../interfaces/IBrush';

class DefaultBrush implements IBrush {
    private isPaiting: Boolean = false;

    onDown({event:e, context}) {
        this.isPaiting = true;
        context.beginPath();
        this.onMove({event:e, context});
    }

    onMove({event:e, context}) {
        if (!this.isPaiting) return;
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.strokeStyle = 'red';
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }

    onUp({event:e, context}) {
        this.isPaiting = false;
    }
    onMouseOut() {
        this.isPaiting = false;
    }
}

export default DefaultBrush;