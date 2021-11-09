export default class LineRenderElement {
    startX: number;
    startY: number;
    endPointX: number;
    endPointY: number;
    color: number;
    gross: number;
    constructor(position: { x, y }, size: { height, width }, ) {
        this.startX = position.x;
        this.startY = position.y;
        this.endPointX = size.height;
        this.endPointY = size.width;
    }
}