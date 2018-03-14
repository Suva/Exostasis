let renderer = require("./main-renderer")
require("../css/main.css")
cat = newImage(require("../img/P1000315.jpg"))

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

    function frame() {
        ctx.drawImage(cat, 0, 0)
        renderer.render(ctx)
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}

