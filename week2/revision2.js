const fs = require('fs');
let newdata;

// Read the contents of the input file
fs.readFile('file1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file1.txt:', err);
        return;
    }

    console.log(data);
    newdata = data;

    // Reverse the content
    const rev = newdata.split('').reverse().join('');
    console.log(rev);

    // Write the reversed content to the output file
    fs.writeFile('file2.txt', rev, (err, data) => {
        if (err) {
            console.error('Error writing to file2.txt:', err);
            return;
        }

        console.log('File operations completed. Reversed content written to file2.txt.');
    });
});
