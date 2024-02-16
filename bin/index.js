#!/usr/bin/env node
const path = require('path');
const Allcommands = require(path.join(__dirname, '..', 'commands', 'Allcommands'));
const {helpInfo} = require(path.join(__dirname, '..', 'commands', 'helpers'));

const { NumberOfWords, NumberOfLines} = Allcommands;
const fs = require('fs');
const args = process.argv.slice(2);

const command = args[0];
const filePath = args[1];
if (command === '--help' || command === '-h') {
    console.log(helpInfo);
    return;
}
else if(args.length != 2)
{
    console.log("Invalid command")
    console.log("To know the valid commands run: gunjan1 --help")
}
else if(command == '-c')
{
    console.log("number of bytes"+filePath)
}


function getContent(filePath, callback) {
    // Read the content of the file
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            callback(err); // Call the callback function with the error
            return;
        }
        
        // Write the content to 'text.txt' file
        fs.writeFile('text.txt', data, 'utf8', function(err) {
            if (err) {
                console.error(`Error writing file: ${err.message}`);
                callback(err); // Call the callback function with the error
                return;
            }
            
            // Call the callback function with the data
            callback(null, data);
        });
    });
}

// Usage example:
getContent(filePath, function(err, data) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Content:', data);
    }
});

// NumberOfWords();