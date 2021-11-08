import settings from '../brushesSetting';

export default interface IBrush{
    onDown(context: CanvasRenderingContext2D, e: MouseEvent),
    onMove(context: CanvasRenderingContext2D, e: MouseEvent),
    onUp(context: CanvasRenderingContext2D, e: MouseEvent),
    onMouseOut(),
}
