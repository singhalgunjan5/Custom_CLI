const fs = require('fs');
function NumberOfLines(filePath)
{
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }
    
        // Split the content by newline characters and count the lines
        
        const nbLines = data.split('\n').length - 1;

        console.log(`Number of lines in the file: ${nbLines}`);
    });
}
module.exports =  NumberOfLines ;
