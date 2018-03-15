const WebMidi = require("webmidi")

window.WebMidi = WebMidi

const noteListeners = {};

WebMidi.enable(() => {
    const input = WebMidi.getInputByName("TSCFF");

    input.on("noteon", "all", (noteEvent) => {
        let { note } = noteEvent;
        let noteName = note.name + note.octave;

        console.log(noteName, noteEvent)

        if(noteListeners[note]) {
            noteListeners[note].forEach((cb) => cb(noteEvent))
        }
    })
})

module.exports = {
    onNote(note, handler) {
        if(!noteListeners[note]) {
            noteListeners[note] = []
        }

        noteListeners[note].push(handler)
    }
}