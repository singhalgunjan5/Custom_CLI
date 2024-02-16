const fs = require("fs");
function NumberOfWords(filePath)
{
    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }
    
        // Split the content by newline characters and count the lines
        const words = data.split(/\s+/);
        const wordCount = words.filter(word => word.trim() !== '').length;
    
        console.log(`Number of words in the file: ${wordCount}`);
    });
}
module.exports=NumberOfWords;