import BrushHandler from "../brushes/BrushHandler"

export default class ButtonHandler {
    registerButton(btn:HTMLButtonElement, brush:any){
        btn.addEventListener("click",()=>{
            BrushHandler.setBrush(brush);
        })
    }
}