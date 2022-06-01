export const copy = async () => {
    const fs = await import('fs');
    if (!fs.existsSync('src/fs/files') || fs.existsSync('src/fs/files_copy')) throw new Error('FS operation failed');
    else {
        fs.mkdir('src/fs/files_copy/files/', { recursive: true }, function (err) {
            if (err) {
                console.log("Error Creating Directory: " + err);
            } else {
                const filesToCopy = fs.readdirSync('src/fs/files')
                console.log(filesToCopy);
                filesToCopy.forEach(e => fs.copyFile(`src/fs/files/${e}`, `src/fs/files_copy/files/${e}`, (err) => {
                    if (err)
                        throw err;
                }))
            }
        });
    }
};