const Grain = require('./FilmGrain')
const RandomText = require('./RandomText')
const PlacedText = require('./PlacedText')
const BackgroundDrawer = require('./BackgroundDrawer')
const Flash = require('./Flash')
const Dust = require('./Dust')
const Flicker = require('./Flicker')

function calculatePosition(pos) {
    return (Math.max(Math.min((Math.random() - 0.5) * 4 + pos, 20), 0));
}

module.exports = function (ctx, target) {
    let frame = 0;

    const grain = Grain(target)
    const dust = Dust(target)

    const painters = [
        BackgroundDrawer(ctx),
        Flash(ctx, 36, 'screen'),
        Flash(ctx, 37, 'difference'),
        Flash(ctx, 38, 'overlay'),
        PlacedText(ctx, 40, 40, 500, 40, 'CYBERCAT CREATIONS'),
        PlacedText(ctx, 41, 445, 60, 40, 'A MATTER OF LEAST CONCERN'),
        PlacedText(ctx, 42, 190, 330, 120, 'EXOSTASIS', 'black'),
        RandomText(ctx, 48, "LOOK"),
        // PlacedText(ctx, 48, 60, 460, 100, "LOOK"),
        RandomText(ctx, 49, "THEY"),
        RandomText(ctx, 50, "THEY ARE WATING"),
        RandomText(ctx, 51, "FOR US"),
        RandomText(ctx, 52, "WE"),
        RandomText(ctx, 53, "WE MUST HIDE"),
        RandomText(ctx, 54, "THEY CAN'T FIND US"),
        RandomText(ctx, 55, "WE MUST NOT BE SEEN"),
        RandomText(ctx, 56, "SEEN"),

        RandomText(ctx, 57, "THEY ARE HERE"),
        RandomText(ctx, 58, "HERE"),
        RandomText(ctx, 59, "WE MUST LOOK FOR A WAY OUT"),
        RandomText(ctx, 60, "RUN"),

        RandomText(ctx, 61, "THERE IS NO"),
        PlacedText(ctx, 61, 40, 80, 60, "THERE IS NO"),
        RandomText(ctx, 62, "TIME"),
        PlacedText(ctx, 62, 340, 330, 120, "TIME", "#800000"),
        RandomText(ctx, 63, "THERE IS NO TIME"),
        RandomText(ctx, 64, "LEAVE ME"),
        RandomText(ctx, 65, "I CAN'T MAKE IT"),
        RandomText(ctx, 66, "GO ALONE"),
        RandomText(ctx, 67, "ALONE"),

        RandomText(ctx, 69, "THEY GOT ME"),
        RandomText(ctx, 70, "LOST"),
        RandomText(ctx, 71, "YOU MUST LOOK FOR A WAY OUT"),
        RandomText(ctx, 72, "I AM LOST"),

        PlacedText(ctx, 73, 190, 330, 120, 'EXOSTASIS', '#800000'),
        PlacedText(ctx, 74, 300, 450, 60, 'REVISION 2018'),

        Flicker(ctx)
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
            target.translate(~~xpos, ~~ypos)
            target.drawImage(ctx.canvas, -20, -20, 1920 + 20, 1080 + 20)
            target.restore()

            dust.render()
            grain.render()
        }
    }
}