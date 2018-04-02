const {dust} = require('./Images')

module.exports = function (ctx) {
    return {
        render() {
            ctx.save()
            for( let y = -~~(Math.random() * 640); y <= 1080; y +=640) {
                for(let x = -~~(Math.random() * 960);x <= 1920; x += 960) {
                    ctx.drawImage(dust[~~(Math.random() * dust.length)], x, y, 500, 500)
                }
            }
            ctx.restore()
        }
    }
}

