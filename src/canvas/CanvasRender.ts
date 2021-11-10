import IRender from "../interfaces/IRender";

export default class CanvasRender {
    renders: Map<any, IRender>;
    renderObjects: object[] = [];
    context: CanvasRenderingContext2D;

    constructor(renders: Map<any, IRender>, context: CanvasRenderingContext2D) {
        this.renders  = renders;
        this.context  = context;
    }

    addElement(object) {
        this.renderObjects.push(object)
        this.render()
    }

    private clear(){
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    render(){
        this.clear()
        this.renderObjects.forEach(element =>{
            this.renders.get(element.constructor).render(element, this.context);
        })
    }
}