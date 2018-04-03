module.exports = function (ctx) {
    return {
        render() {
            ctx.save()
            ctx.globalCompositeOperation = 'overlay'
            ctx.globalAlpha=1;
            const power = 40;
            const level = ~~(127 + ((Math.random() * power) - power / 2))
            ctx.fillStyle = 'rgb('+level+', '+level+', '+level+')'
            ctx.fillRect(0, 0, 960, 540)
            ctx.fill()
            ctx.restore()
        }
    }
}

