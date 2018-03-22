module.exports = {
    cat: newImage(require("../img/P1000315.jpg")),
    grain: newImage(require('../img/noise.png'))
}

function newImage(src) {
    const img = new Image();
    img.src = src
    return img
}