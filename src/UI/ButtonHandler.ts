import BrushHandler from "../brush/BrushHandler"
import IBrush from "../interfaces/IBrush";

export default abstract class ButtonHandler {
    static registerButton(btn: HTMLButtonElement, brush: IBrush){
        btn.addEventListener("click", () => BrushHandler.setBrush(brush))
    }
}