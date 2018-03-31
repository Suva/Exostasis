const WebMidi = require("webmidi")

window.WebMidi = WebMidi

const noteListeners = [];
const noteOffListeners = [];

let startTime = 0;

let recorderNotes = []
window.recorderNotes = recorderNotes
let recording = true;

WebMidi.enable(() => {
    const input = WebMidi.getInputByName("TSCFF");

    function makeNote(type, noteEvent) {
        let now = Date.now();
        if(!startTime) startTime = now
        let time = now - startTime
        let {note, velocity, channel} = noteEvent;
        let recNote = {type, number: note.number, velocity, channel, time};

        if(recording) {
            recorderNotes.push(recNote)
        }

        return recNote;
    }

    input.on("noteon", "all", (noteEvent) => {
        let recNote = makeNote('on', noteEvent);
        noteListeners.forEach((cb) => cb(recNote))
    })

    input.on("noteoff", "all", (noteEvent) => {
        let recNote = makeNote('off', noteEvent);
        noteOffListeners.forEach((cb) => cb(recNote))
    })
})

module.exports = {
    onNote(handler) {
        noteListeners.push(handler)
    },
    onNoteOff(handler) {
        noteOffListeners.push(handler)
    },
    play() {},
    update() {}
}