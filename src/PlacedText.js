let midi = require( "./MidiController");

module.exports = function (ctx, note, x, y, size, text, color = 'white') {
    let textDisplaying = false

    midi.onNote(({number}) => {
        if(number === note) {
            textDisplaying = true
        }
    })

    midi.onNoteOff(({number}) => {
        if(number === note) {
            textDisplaying = false
        }
    })

    return {
        render() {
            if(!textDisplaying)
                return;

            ctx.save()
            ctx.fillStyle = color
            ctx.globalAlpha = 1
            ctx.font = size + 'px boycott'
            ctx.fillText(text, x, y)
            ctx.restore()
        }
    }
}

