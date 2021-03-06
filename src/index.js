require("../css/main.css")

const NoSleep = require("nosleep.js")
const noSleep = new NoSleep()

function enableNoSleep() {
    noSleep.enable();
    document.removeEventListener('click', enableNoSleep, false);
}

let Renderer = require("./Renderer")
let midi = require('./MidiController')
let rendererRunning = true

window.onload = async function () {
    let noloader = document.createElement('div')
    noloader.classList.add('loader')
    noloader.innerText = 'CLICK'
    document.body.appendChild(noloader)
    noloader.onclick = () => {
        enableNoSleep()
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
                setTimeout(() => rendererRunning = false, 6000)
                noSleep.disable()
            }
        })

        function frame() {
            midi.update()
            renderer.render()
            rendererRunning && window.requestAnimationFrame(frame);
        }

        midi.play()
        window.requestAnimationFrame(frame);
        toggleFullScreen()

    }
}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}
