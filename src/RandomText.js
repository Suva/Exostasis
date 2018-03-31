let midi = require( "./MidiController");

module.exports = function (ctx, note, text) {
    let textDisplaying = false
    const numText = 5
    let textPositions = []

    midi.onNote(({number, velocity}) => {
        if(number === note) {
            console.log('Text '+text+' Triggered')
            for(let i = 0; i < numText; i++) {
                let fontSize = (Math.random() * 20 + i / numText * 60)
                textPositions[i] = {
                    fontSize,
                    x: ~~(Math.random() * 960 + 40),
                    y: ~~(Math.random() * 540 + 40)
                }
            }
            textDisplaying = true
        }
    })

    midi.onNoteOff(({number}) => {
        if(number === note) {
            console.log('Text ' + text + ' removed')
            textDisplaying = false
        }
    })

    return {
        render(delta) {
            if(!textDisplaying)
                return;
            ctx.save()
            ctx.fillStyle = "white"

            ctx.globalCompositeOperation = 'screen'
            for(let i = 0; i < numText; i++) {
                let pos = textPositions[i];

                let dim = ctx.measureText(text)
                if(pos.x + dim.width > 920) {
                    pos.x -= dim.width + 40
                }

                if(pos.y + dim.height > 500) {
                    pos.y -= dim.height + 60
                }

                ctx.font = pos.fontSize + 'px boycott'
                ctx.fillText(text, pos.x, pos.y)
            }
            ctx.restore()
        }
    }
}

