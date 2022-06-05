export const list = async () => {
    const fs = await import('fs');
    if (fs.existsSync('src/fs/files')) {
        const filesInFolder = fs.readdirSync('src/fs/files')
        console.log(filesInFolder);
    }
    else {
        throw new Error('FS operation failed');
    }
};