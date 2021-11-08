
export default class Mouse {
    node: HTMLCanvasElement
    brush: any
    painting: boolean
    constructor(node: HTMLCanvasElement) {
        this.node = node
    }
    setBursh(brush :any) {
        this.brush = brush
    }
    start() {
        this.node.addEventListener('mousedown', this.startPosition)
        this.node.addEventListener('mousemove', this.draw);
        this.node.addEventListener('mouseup', this.finishedPosition);
        this.node.addEventListener('mouseout', this.finishedPosition);
    }
    stop() {
        this.node.removeEventListener('mousedown', this.startPosition)
        this.node.removeEventListener('mousemove', this.draw);
        this.node.removeEventListener('mouseup', this.finishedPosition);
        this.node.removeEventListener('mouseout', this.finishedPosition);
    }
    startPosition = (e) => {
        this.painting = true
        this.brush.startPosition(e)
    }
    draw = (e: MouseEvent) => {
        if (!this.painting) return;
        this.brush.draw(e)
    }
    finishedPosition = () => {
        this.painting = false
    }
}

