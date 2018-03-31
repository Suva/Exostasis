let midi = require('./MidiController')
let images = require('./Images').urbex

module.exports = function (ctx) {
    let img = false

    midi.onNote(({ number, velocity }) => {
        if(number == 127) {
            img = null
        }

        if(number >= 0 && number < 24) {
            img = images[number]
        }
        if(number == 24) { // C0 - Opacity
            ctx.globalAlpha  = velocity
            console.log("Setting global alpha to: ", velocity)
        }
    })

    return {
        render() {
            if (img) {
                ctx.drawImage(img, 0, 0)
            }

            if(img === null) {
                ctx.fillStyle = 'black'
                ctx.fillRect(0, 0, 960, 540)
            }
        }
    }
}