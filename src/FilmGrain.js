const {grain} = require('./Images')

module.exports = function (ctx) {
    // const grainPat = ctx.createPattern(grain, "repeat");
    return {
        render() {
            ctx.save()
            ctx.globalCompositeOperation = 'overlay'
            for( let y = -~~(Math.random() * 500); y <= 1080; y +=500) {
                for(let x = -~~(Math.random() * 500);x <= 1920; x += 500) {
                    ctx.drawImage(grain, x, y, 500, 500)
                }
            }
            ctx.restore();
        }
    }
}

