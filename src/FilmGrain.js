const {grain} = require('./Images')

module.exports = function (ctx) {
    const grainPat = ctx.createPattern(grain, "repeat");
    return {
        render() {
            ctx.translate(-~~(Math.random() * 500), -~~(Math.random() * 500))
            ctx.globalCompositeOperation = 'overlay'
            ctx.rect(0, 0, 1920 + 500, 1080 + 500)
            ctx.fillStyle = grainPat
            ctx.fill()
            ctx.globalCompositeOperation = 'source-over'
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
}

