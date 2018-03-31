if(true || process.env.NODE_ENV === 'production') {
    console.log("Prod mode using programmed music player")
    module.exports = require('./MusicPlayer')
} else {
    console.log("Dev mode using web midi controller")
    module.exports = require('./WebMidiController')
}