import IBrush from "../interfaces/IBrush";

class Vector2 {
    x: number;
    y: number;
}

class RectBrush implements IBrush {
    isPaiting: boolean;
    startPosition: Vector2 = new Vector2();

    onDown({event, context}: { event: any; context: any }) {
        this.isPaiting = true;
        this.startPosition = { x: event.offsetX, y: event.offsetY };
    }
    onMove({event, context}: { event: any; context: any }) {
        if(!this.isPaiting) return;
        context.beginPath();
        context.rect(this.startPosition.x, this.startPosition.y, event.offsetX - this.startPosition.x , event.offsetY - this.startPosition.y );
    }

    onUp({event, context}: { event: any; context: any }) {
        context.stroke();
        this.isPaiting = false;
    }
    onMouseOut() { }

}
export default RectBrush;