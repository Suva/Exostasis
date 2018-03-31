const {dust} = require('./Images')

module.exports = function (ctx) {
    const patterns = dust.map(img => ctx.createPattern(img, "repeat"))

    return {
        render() {
            ctx.save()
            ctx.translate(-(Math.random() * 960), -(Math.random() * 640))
            ctx.rect(0, 0, 1920 + 960, 1080 + 960)
            ctx.fillStyle = patterns[~~(Math.random() * patterns.length)]
            ctx.fill()
            ctx.restore()
        }
    }
}

