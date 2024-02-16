const path = require("path")
// AllCommands.js
const  NumberOfWords  = require(path.join(__dirname, '..', 'commands', 'NumberOfWords'))
const  NumberOfLines  = require(path.join(__dirname, '..', 'commands', 'NumberOfLines'))
const  NumberOfBytes  = require(path.join(__dirname, '..', 'commands', 'NumberOfBytes'))
const  NumberOfCharacters  = require(path.join(__dirname, '..', 'commands', 'NumberOfCharacters'))



// Implement help functionality



module.exports = { NumberOfLines, NumberOfWords,NumberOfBytes,NumberOfCharacters };


