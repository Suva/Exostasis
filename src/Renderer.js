const Grain = require('./FilmGrain')
const RandomText = require('./RandomText')

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


module.exports = function (ctx, src, target) {
    let frame = 0;

    const grain = Grain(target)
    const randomText = RandomText(ctx)

    return {
        render() {
            ctx.fillStyle = "black"
            ctx.font = '20px sans-serif'
            ctx.fillText("#" + pad(++frame, 6), 5, 20)
            randomText.render();

            target.drawImage(src, Math.random() * -10, Math.random() * -10, 1920 + 10, 1080 + 10)
            grain.render()
        }
    }
}