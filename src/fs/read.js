export const read = async () => {
    const fs = await import('fs');
    if (fs.existsSync('files/fileToRead.txt')) {
        fs.readFile('files/fileToRead.txt', 'utf8', (err, data) => {
            if (!err) {
                console.log(data);
            }
        });
    }
    else {
        throw new Error('FS operation failed');
    }
};