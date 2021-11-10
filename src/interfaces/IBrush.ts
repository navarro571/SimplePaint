export default interface IBrush{
    onMouseDown(e: MouseEvent, ctx: CanvasRenderingContext2D),
    onMouseMove(e: MouseEvent, ctx: CanvasRenderingContext2D),
    onMouseUp(e: MouseEvent, ctx: CanvasRenderingContext2D),
    onMouseOut(e: MouseEvent, ctx: CanvasRenderingContext2D),
}
