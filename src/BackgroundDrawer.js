let midi = require('./MidiController')
let images = require('./Images').urbex

module.exports = function (ctx) {
    let img = false

    midi.onNote(({ number }) => {
        if(number > 0 && number < 24) {
            img = images[number]
        }
    })

    return {
        render() {
            if (img) {
                ctx.drawImage(img, 0, 0)
            }
        }
    }
}