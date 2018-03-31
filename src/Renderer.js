const Grain = require('./FilmGrain')
const RandomText = require('./RandomText')
const PlacedText = require('./PlacedText')
const BackgroundDrawer = require('./BackgroundDrawer')
const Flash = require('./Flash')

function calculatePosition(pos) {
    return (Math.max(Math.min((Math.random() - 0.5) * 4 + pos, 20), 0));
}

module.exports = function (ctx, target) {
    let frame = 0;

    const grain = Grain(target)
    const painters = [
        BackgroundDrawer(ctx),
        Flash(ctx, 36, 'screen'),
        Flash(ctx, 37, 'difference'),
        Flash(ctx, 38, 'overlay'),
        RandomText(ctx, 48, "LOOK"),
        // PlacedText(ctx, 48, 60, 460, 100, "LOOK"),
        RandomText(ctx, 49, "THEY"),
        RandomText(ctx, 50, "THEY ARE WATING"),
        RandomText(ctx, 51, "FOR US")
    ]

    let xpos = 0;
    let ypos = 0;
    let time = Date.now()

    return {
        render() {
            xpos = calculatePosition(xpos)
            ypos = calculatePosition(ypos)

            let newTime = Date.now()
            let delta = newTime - time
            time = newTime
            painters.forEach(painter => painter.render(delta))

            target.save()
            target.translate(Math.floor(xpos), Math.floor(ypos))
            target.drawImage(ctx.canvas, -20, -20, 1920 + 20, 1080 + 20)
            target.restore()

            grain.render()
        }
    }
}