let midi = require('./MidiController')
let PI_div_2 = Math.PI / 2

function easeOut(t) {
    return Math.sin(t * PI_div_2);
}

function easeIn(t) {
    return (t === 0) ? 0 : Math.pow(2, 2 * (t - 1));
}

module.exports = function (ctx, note, modifier) {
    let phase = 0

    let bufCnv = document.createElement('canvas')
    bufCnv.setAttribute("width", 960)
    bufCnv.setAttribute("height", 540)
    const bufCtx = bufCnv.getContext('2d')

    midi.onNote(({number, velocity}) => {
        if(number === note) {
            bufCtx.drawImage(ctx.canvas, 0, 0)
            phase = 1
        }
    })


    return {
        render(delta){
            if(phase >= 0) {
                ctx.save()
                let scale = 1 - easeOut(phase) + 1
                ctx.globalCompositeOperation = modifier;
                ctx.globalAlpha = easeOut(phase)
                ctx.translate(480, 270)
                ctx.scale(scale, scale)
                ctx.drawImage(bufCnv, -480, -270)
                ctx.restore()
                phase -= delta * 0.0003
            }
        }
    }
}