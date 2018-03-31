let midi = require( "./MidiController");

module.exports = function (ctx, note, x, y, size, text) {
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
            ctx.fillStyle = "white"
            ctx.globalCompositeOperation = 'screen'
            ctx.font = size + 'px boycott'
            ctx.fillText(text, x, y)
            ctx.restore()
        }
    }
}

