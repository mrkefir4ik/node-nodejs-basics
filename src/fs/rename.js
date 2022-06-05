export const rename = async () => {
    const fs = await import('fs');
    const filesInFolder = fs.readdirSync('src/fs/files')
    if (filesInFolder.length !== 0 &&
        filesInFolder.some(e => e == 'wrongFilename.txt') &&
        filesInFolder.every(e => e !== 'properFilename.md')) {
        fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', e => null);
    }
    else {
        throw new Error('FS operation failed');
    }
};