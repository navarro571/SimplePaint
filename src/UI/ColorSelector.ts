import eventBus from "../basic/EventBus";

export default class ColorSelector {
    private nodes: any
    private selector: any
    private brushHandler:any
  
    setBruShHander(brushHandler){
        this.brushHandler = brushHandler
    }
    match(btn, pincel) {
        btn.addEventListener('click', (e) => {
            this.brushHandler.setBrush(pincel)
        })
    }
    stop() {
        this.nodes.forEach(element => element.removeEventListener('click', this.colorSelected))
    }
    colorSelected = (e) => {
        eventBus.dispatch('color-selection', e.currentTarget.id)
    }
    setSelector(selector) {
        this.selector = selector
    }
}