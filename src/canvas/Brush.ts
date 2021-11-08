export default class Brush{
    ctx:any
    constructor(ctx:any){
        this.ctx = ctx
    }
    startPosition = (e) => {
        this.ctx.beginPath();
        this.draw(e);
    }
    draw = (e: MouseEvent) => {
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
    }
}