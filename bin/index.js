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


function updateFile()
{
    fs.readFile(filePath,'utf-8',function(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
          
            fs.writeFile('text.txt',data,function(err){
                if(err)console.log(err);

            })
        }
    })
}
updateFile();
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(`Error getting file stats: ${err.message}`);
        return;
    }

    // Number of bytes in the file
    const fileSizeInBytes = stats.size;
    console.log(`Number of bytes in the file: ${fileSizeInBytes}`);
});

// NumberOfWords();