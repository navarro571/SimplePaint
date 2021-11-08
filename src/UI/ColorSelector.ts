import eventBus from "../basic/EventBus";

export default class ColorSelector {
    private nodes: any
    private selector: any
    start() {
        this.nodes = document.querySelectorAll(this.selector || ".color-list li")
        this.nodes.forEach(element => {
            element.addEventListener('click', this.colorSelected)
        });
    }
    stop() {
        this.nodes.forEach(element => element.removeEventListener('click', this.colorSelected))
    }
    colorSelected = (e) => {
        eventBus.dispatch('color-selection', e.currentTarget.innerText)
    }
    setSelector(selector) {
        this.selector = selector
    }
}