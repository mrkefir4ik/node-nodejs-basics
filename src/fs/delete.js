export const remove = async () => {
    const fs = await import('fs');
    const filesInFolder = fs.readdirSync('files')
    if (filesInFolder.length !== 0 &&
        filesInFolder.some(e => e == 'fileToRemove.txt')) {
        fs.unlink('files/fileToRemove.txt', () => null)
    }
    else {
        throw new Error('FS operation failed');
    }
};