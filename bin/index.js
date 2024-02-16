#!/usr/bin/env node
const path = require('path');
const Allcommands = require(path.join(__dirname, '..', 'commands', 'Allcommands'));
const {helpInfo,updateFile} = require(path.join(__dirname, '..', 'commands', 'helpers'));
const { NumberOfWords, NumberOfLines,NumberOfBytes,NumberOfCharacters} = Allcommands;
const fs = require('fs');
const args = process.argv.slice(2);
if (args[0] === '--help' || args[0] === '-h') {
    console.log(helpInfo);
    return;
}
else if(args.length === 0 || args.length == 1)
{
    console.log(helpInfo);
}
 else if(args.length != 2)
{
    
    if (filePath != "") {
     
     console.log(filePath);
      NumberOfBytes(filePath);
      NumberOfLines(filePath);
      NumberOfWords(filePath);
    }
    else{
    console.log("Invalid command")
    console.log("To know the valid commands run: gunjan1 --help")
    }
}
else{
    const command = args[0];
    const filePath = args[1];

 if(command === '-c')
{
    NumberOfBytes(filePath);
}
else if(command === '-l')
{
    NumberOfLines(filePath)
}
else if(command === '-w')
{
    NumberOfWords(filePath);
}
else if(command === '-m')
{
    NumberOfCharacters(filePath)
}
else{
    console.log(helpInfo);
}

}



// NumberOfWords();