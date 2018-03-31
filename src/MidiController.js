const WebMidi = require("webmidi")

window.WebMidi = WebMidi

const noteListeners = [];
const noteOffListeners = [];

WebMidi.enable(() => {
    const input = WebMidi.getInputByName("TSCFF");

    input.on("noteon", "all", (noteEvent) => {
        let { note, velocity, channel } = noteEvent;
        let noteName = note.name + note.octave;
        let recNote = {number: note.number, noteName, velocity, channel};
        noteListeners.forEach((cb) => cb(recNote))
    })

    input.on("noteoff", "all", (noteEvent) => {
        let { note, velocity, channel } = noteEvent;
        let noteName = note.name + note.octave;
        let recNote = {number: note.number, noteName, velocity, channel};
        noteOffListeners.forEach((cb) => cb(recNote))
    })
})

module.exports = {
    onNote(handler) {
        noteListeners.push(handler)
    },
    onNoteOff(handler) {
        noteOffListeners.push(handler)
    }
}