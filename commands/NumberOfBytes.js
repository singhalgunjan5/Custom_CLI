const fs = require('fs');
function NumberOfBytes(filePath)
{
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(`Error getting file stats: ${err.message}`);
            return;
        }
    
        // Number of bytes in the file
        const fileSizeInBytes = stats.size;
        console.log(`Number of bytes in the file: ${fileSizeInBytes}`);
    });
}
module.exports=NumberOfBytes