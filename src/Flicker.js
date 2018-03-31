module.exports = function (ctx) {
    return {
        render() {
            ctx.save()
            ctx.rect(0, 0, 960, 540)
            ctx.globalCompositeOperation = 'overlay'
            const power = 40;
            const level = ~~(127 + ((Math.random() * power) - power / 2))
            ctx.fillStyle = 'rgb('+level+', '+level+', '+level+')'
            ctx.fill()
            ctx.restore()
        }
    }
}

