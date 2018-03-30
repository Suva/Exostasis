module.exports = {
    cat: newImage(require("../img/P1000315.jpg")),
    grain: newImage(require('../img/noise.png')),
    urbex: [
        newImage(require('../img/urbex/urbex-1.jpg')),
        newImage(require('../img/urbex/urbex-2.jpg')),
        newImage(require('../img/urbex/urbex-3.jpg')),
        newImage(require('../img/urbex/urbex-4.jpg')),
        newImage(require('../img/urbex/urbex-5.jpg')),
        newImage(require('../img/urbex/urbex-6.jpg')),
        newImage(require('../img/urbex/urbex-7.jpg')),
        newImage(require('../img/urbex/urbex-8.jpg')),
        newImage(require('../img/urbex/urbex-9.jpg')),
        newImage(require('../img/urbex/urbex-10.jpg')),
        newImage(require('../img/urbex/urbex-11.jpg')),
        newImage(require('../img/urbex/urbex-13.jpg')),
        newImage(require('../img/urbex/urbex-14.jpg')),
        newImage(require('../img/urbex/urbex-15.jpg')),
        newImage(require('../img/urbex/urbex-16.jpg')),
        newImage(require('../img/urbex/urbex-17.jpg')),
        newImage(require('../img/urbex/urbex-18.jpg')),
        newImage(require('../img/urbex/urbex-19.jpg')),
        newImage(require('../img/urbex/urbex-20.jpg')),
        newImage(require('../img/urbex/urbex-21.jpg')),
        newImage(require('../img/urbex/urbex-22.jpg')),
        newImage(require('../img/urbex/urbex-23.jpg'))
    ]
}

function newImage(src) {
    const img = new Image()
    img.src = src
    return img
}