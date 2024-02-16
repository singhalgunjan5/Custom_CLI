const fs = require('fs');
function NumberOfCharacters(filePath)
{
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }
    
        // Count the number of characters in the file
        const charCount = data.length;
    
        console.log(`Number of characters in the file: ${charCount}`);
    });
}
module.exports = NumberOfCharacters;