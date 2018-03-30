const WebMidi = require("webmidi")

window.WebMidi = WebMidi

const noteListeners = [];

WebMidi.enable(() => {
    const input = WebMidi.getInputByName("TSCFF");

    input.on("noteon", "all", (noteEvent) => {
        let { note, velocity, channel } = noteEvent;
        let noteName = note.name + note.octave;

        console.log(noteName, noteEvent)
        let recNote = {number: note.number, noteName, velocity, channel};
        noteListeners.forEach((cb) => cb(recNote))
    })
})

module.exports = {
    onNote(handler) {
        noteListeners.push(handler)
    }
}