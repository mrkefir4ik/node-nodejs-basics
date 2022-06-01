export const read = async () => {
    const fs = await import('fs');
    if (fs.existsSync('src/fs/files/fileToRead.txt')) {
        fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
            if (!err) {
                console.log(data);
            }
        });
    }
    else {
        throw new Error('FS operation failed');
    }
};