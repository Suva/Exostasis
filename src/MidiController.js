if(process.env.NODE_ENV === 'production') {
    module.exports = require('./MusicPlayer')
} else {
    module.exports = require('./WebMidiController')
}