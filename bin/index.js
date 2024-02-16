#!/usr/bin/env node
const path = require('path');
const Allcommands = require(path.join(__dirname, '..', 'commands', 'Allcommands'));
const {helpInfo,updateFile,isFileValid} = require(path.join(__dirname, '..', 'commands', 'helpers'));
const { NumberOfWords, NumberOfLines,NumberOfBytes,NumberOfCharacters} = Allcommands;
const fs = require('fs');
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(helpInfo);
    return;
}
else if(args.length === 1)
{
    const filePath = args[0];
    if (filePath != "") {

         if(isFileValid(filePath)){
         NumberOfBytes(filePath);
         NumberOfLines(filePath);
         NumberOfWords(filePath);
         }
         else{
            console.log(helpInfo);
         }
       }
       else{
       console.log("Invalid command")
       console.log("To know the valid commands run: gunjan1 --help")
       }
}
else if(args.length == 2)
{
   
    const command = args[0];
    const filePath = args[1];
    switch(command){
    case '-c':
        NumberOfBytes(filePath);
        break;
    case '-l':
        NumberOfLines(filePath);
        break;
    case '-w':
        NumberOfWords(filePath);
        break;
    case '-m':
        NumberOfCharacters(filePath);
        break;
    default:
        console.log("Invalid command option:", command);
        console.log(helpInfo);
    }

}
else{
    console.log(helpInfo);
}



// NumberOfWords();