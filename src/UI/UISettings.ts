const color: HTMLInputElement = document.querySelector("#color-selector");
const lineWidth: HTMLInputElement = document.querySelector("#linewidth-selector");
const lineWidthNumber : HTMLSpanElement = document.querySelector("#lineWidth-number");
const fill : HTMLInputElement = document.querySelector("#fill");

window.addEventListener('load', ()=>{
    document.querySelector('canvas').scrollIntoView({
        block: "center",
        inline: "center",
    });
});

lineWidth.addEventListener("mousemove", () => {
    lineWidthNumber.innerText = lineWidth.value;
});

lineWidthNumber.innerText = lineWidth.value;

function getColor(): string {
    return color.value || 'black';
}
function getLineWidth(): number {
    return Math.floor(parseInt(lineWidth.value)) || 10;
}
function isFill(): boolean {
    return fill.checked;
}

export {
    getColor,
    getLineWidth,
    isFill,
}