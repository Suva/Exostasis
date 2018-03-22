require("../css/main.css")

let Renderer = require("./Renderer")
let { cat } = require("./Images")
let midi = require( "./MidiController");

window.onload = async function () {
    let container = document.createElement("div");
    container.setAttribute("class", "container")
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", 1920);
    canvas.setAttribute("height", 1080);

    let backBuf = document.createElement("canvas");
    backBuf.setAttribute("width", 960);
    backBuf.setAttribute("height", 540);


    container.appendChild(canvas);
    document.body.appendChild(container);

    const target = canvas.getContext('2d');
    const ctx = backBuf.getContext('2d');

    const renderer = Renderer(ctx, backBuf, target)

    function frame() {
        ctx.drawImage(cat, 0, 0, 960, 540)
        renderer.render()
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}

