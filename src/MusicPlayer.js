let music = require('../music/goodone.mp3')
let player = new Audio(music)

let noteListeners = []
let noteOffListeners = []
let song = require('../music/song.json')
let songPos = 0

function handleEvent(ev) {
    (ev.type === 'on' ? noteListeners : noteOffListeners)
        .forEach(cb => cb(ev))
}

module.exports = {
    onNote(handler) {
        noteListeners.push(handler)
    },
    onNoteOff(handler) {
        noteOffListeners.push(handler)
    },
    play(){
        player.play()
    },
    update(){
        let time = player.currentTime * 1000

        while (songPos < song.length) {
            let ev = song[songPos]

            if(ev.time <= time) {
                handleEvent(ev)
                songPos++
            } else {
                break
            }
        }
    }
}
