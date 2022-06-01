export const remove = async () => {
    const fs = await import('fs');
    const filesInFolder = fs.readdirSync('src/fs/files')
    if (filesInFolder.length !== 0 &&
        filesInFolder.some(e => e == 'fileToRemove.txt')) {
        fs.unlink('src/fs/files/fileToRemove.txt', () => null)
    }
    else {
        throw new Error('FS operation failed');
    }
};