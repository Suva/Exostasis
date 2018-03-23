const Grain = require('./FilmGrain')
const RandomText = require('./RandomText')

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let xpos = 0;
let ypos = 0;

module.exports = function (ctx, src, target) {
    let frame = 0;

    const grain = Grain(target)
    const randomText = RandomText(ctx)

    return {
        render() {

            // randomText.render();

            xpos = Math.max(Math.min((Math.random() - 0.5) * 4 + xpos, 20), 0)
            ypos = Math.max(Math.min((Math.random() - 0.5) * 4 + ypos, 20), 0)


            target.drawImage(src, -xpos, -ypos, 1920 + 20, 1080 + 20)

            target.fillStyle = "white"
            target.font = '40px sans-serif'
            target.fillText("#" + pad(++frame, 6), 5, 40)
            grain.render()
        }
    }
}