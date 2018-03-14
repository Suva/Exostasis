let renderer = require("./main-renderer")
require("../css/main.css")

window.onload = function () {
    let container = document.createElement("div");
    container.setAttribute("class", "container")
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", 1920);
    canvas.setAttribute("height", 1080);

    container.appendChild(canvas);
    document.body.appendChild(container);

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    function frame() {
        ctx.clearRect(0, 0, 1920, 1080)
        renderer.render(ctx);
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}

