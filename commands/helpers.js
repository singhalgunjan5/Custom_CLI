const fs = require('fs');

const helpInfo = `
Usage: gunjan1 [command] [FileName]

A simple CLI tool.

Commands:
  -c         Outputs the number of bytes
  -l         Outputs the number of lines
  -w         Outputs the number of words
  -m         Outputs the number of characters

Examples:
  mycli command1 <FileName>

For more information, run: gunjan1 --help
`;


function updateFile(filePath)
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

module.exports ={helpInfo,updateFile}