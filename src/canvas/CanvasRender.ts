import IRender from "../interfaces/IRender";

export default class CanvasRender {
    renders:  Map<any, IRender>;
    renderObjects: object[] = [];
    tempObjects: object[];
    context: CanvasRenderingContext2D;

    constructor(renders: Map<any, IRender>, context: CanvasRenderingContext2D) {
        this.renders  = renders;
        this.context  = context;
    }

    tempRect(object) {
        this.renderObjects.push(object)
        this.render()
    }

    addElement(object) {
        this.renderObjects.push(object)
        this.render()
    }

    private clear(){
        console.log('Cleaning------------------------------');
    }

    private render(){
        this.clear()
        this.renderObjects.forEach(element =>{
            this.renders.get(element.constructor).render(element, this.context);
        })
    }
}