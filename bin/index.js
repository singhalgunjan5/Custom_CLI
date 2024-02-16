#!/usr/bin/env node
const path = require('path');
const Allcommands = require(path.join(__dirname, '..', 'commands', 'Allcommands'));
const { NumberOfWords, NumberOfLines } = Allcommands;
const args = process.argv.slice(2);

const fs = require('fs');

const command = args[0];
const filename = args[1];

function getContent(filename){
fs.readFile(filename, 'utf8', function(err, data){
    // Display the file content
    console.log(data);
    return data;
});
}
// Now you can call NumberOfWords directly
console.log(args);
getContent(filename);
NumberOfWords();