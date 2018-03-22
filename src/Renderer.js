const Grain = require('./FilmGrain')
const RandomText = require('./RandomText')

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


module.exports = function (ctx) {
    let frame = 0;

    const grain = Grain(ctx)
    const randomText = RandomText(ctx)

    return {
        render() {
            ctx.fillStyle = "black"
            ctx.font = '20px sans-serif'
            ctx.fillText("#" + pad(++frame, 6), 5, 20)
            randomText.render();
            grain.render()
        }
    }
}