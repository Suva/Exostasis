require("../css/main.css")

let Renderer = require("./main-renderer")
let cat = newImage(require("../img/P1000315.jpg"))
let midi = require( "./MidiController");

function newImage(src) {
    const img = new Image();
    img.src = src
    return img
}

window.onload = async function () {
    let container = document.createElement("div");
    container.setAttribute("class", "container")
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", 1920);
    canvas.setAttribute("height", 1080);

    container.appendChild(canvas);
    document.body.appendChild(container);

    const ctx = canvas.getContext('2d');

    const renderer = Renderer(ctx)

    function frame() {
        ctx.drawImage(cat, 0, 0)
        renderer.render()
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}

