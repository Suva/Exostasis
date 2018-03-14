let frame = 0;

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function render(ctx) {
    ctx.fillStyle = "black"
    ctx.font = '20px sans-serif';
    ctx.fillText("#" + pad(++frame, 6), 5, 20)
}

module.exports = {
    render
}