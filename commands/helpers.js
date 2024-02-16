const fs = require('fs');

const helpInfo = `
Usage: gunjan1 [command] [FilePath]

A simple CLI tool.

Commands:
  -c         Outputs the number of bytes
  -l         Outputs the number of lines
  -w         Outputs the number of words
  -m         Outputs the number of characters
  

Examples:
  gunjan1 command1 <FilePath>
  gunjan1 <FilePath>

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
function isFileValid(filePath) {
    return fs.existsSync(filePath);
}
module.exports ={helpInfo,updateFile,isFileValid}