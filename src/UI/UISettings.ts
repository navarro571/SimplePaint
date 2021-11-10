
const color: HTMLInputElement = document.querySelector(".color-selector");
const lineWidth: HTMLInputElement = document.querySelector(".linewidth-selector");
const lineWidthNumber : HTMLSpanElement = document.querySelector("#lineWidth-number");

lineWidthNumber.innerText = lineWidth.value;

lineWidth.addEventListener("mousemove", () => {
    lineWidthNumber.innerText = lineWidth.value;
});

window.addEventListener('load', ()=>{
    document.querySelector('canvas').scrollIntoView({
        block: "center",
        inline: "center",
    });
});

function getColor(): string {
    return color.value || 'black';
}
function getLineWidth(): number {
    return Math.floor(parseInt(lineWidth.value)) || 10;
}

export {
    getColor,
    getLineWidth,
}