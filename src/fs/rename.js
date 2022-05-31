export const rename = async () => {
    const fs = await import('fs');
    const filesInFolder = fs.readdirSync('files')
    if (filesInFolder.length !== 0 &&
        filesInFolder.some(e => e == 'wrongFilename.txt') &&
        filesInFolder.every(e => e !== 'properFilename.md')) {
        fs.rename('files/wrongFilename.txt', 'files/properFilename.md', e => null);
    }
    else {
        throw new Error('FS operation failed');
    }
};