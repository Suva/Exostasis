module.exports = {
    grain: newImage(require('../img/noise.png'))
}

function newImage(src) {
    const img = new Image();
    img.src = src
    return img
}