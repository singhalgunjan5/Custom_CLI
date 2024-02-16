## Installation
To use mycli, you need to have Node.js installed on your system. You can install it globally using npm:
1)Clone the repo
2)Run npm install -g

## mycli [options] <file_path>
Replace `<file_path>` with the path to the file you want to analyze.

### Options

- `-c`: Count the number of bytes in the file.
- `-l`: Count the number of lines in the file.
- `-w`: Count the number of words in the file.
- `-m`: Count the number of characters in the file (multibyte characters supported).

If no options are provided, ccwc will output the count of bytes, lines, and words by default.

### Help

To display usage instructions and available options, use the `--help` or `-h` option:

