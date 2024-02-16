const path = require("path")
// AllCommands.js
const  NumberOfWords  = require(path.join(__dirname, '..', 'commands', 'NumberOfWords'))
const  NumberOfLines  = require(path.join(__dirname, '..', 'commands', 'NumberOfLines'))



module.exports = { NumberOfLines, NumberOfWords };


