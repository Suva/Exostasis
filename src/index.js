require("../css/main.css")

let Renderer = require("./Renderer")
let midi = require('./MidiController')

window.onload = async function () {
    let noloader = document.createElement('div')
    noloader.classList.add('loader')
    noloader.innerText = 'NO LOADER'
    document.body.appendChild(noloader)

    setTimeout(() => {
        document.body.removeChild(noloader)

        let canvas = document.createElement("canvas");
        canvas.setAttribute("width", 1920);
        canvas.setAttribute("height", 1080);

        let backBuf = document.createElement("canvas");
        backBuf.setAttribute("width", 960);
        backBuf.setAttribute("height", 540);

        document.body.appendChild(canvas);

        const target = canvas.getContext('2d');
        const ctx = backBuf.getContext('2d');

        const renderer = Renderer(ctx, target)

        midi.onNote(note => {
            if(note.number === 126) {
                canvas.classList.add('hidden')
            }
        })

        function frame() {
            midi.update()
            renderer.render()
            window.requestAnimationFrame(frame);
        }

        midi.play()
        window.requestAnimationFrame(frame);
    }, process.env.NODE_ENV === 'production' ? 3000 : 10)
}

