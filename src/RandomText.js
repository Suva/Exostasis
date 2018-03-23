module.exports = function (ctx) {
    return {
        render() {
            ctx.globalCompositeOperation = 'screen'
            ctx.fillStyle = "white"
            for(let i = 0; i < 10; i++) {
                ctx.font = Math.random() * 300 + 'px murder'
                ctx.fillText('test', Math.random() * 1920, Math.random() * 1080)
            }
            ctx.globalCompositeOperation = 'source-over'
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
}

