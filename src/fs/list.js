export const list = async () => {
    const fs = await import('fs');
    if (fs.existsSync('files')) {
        const filesInFolder = fs.readdirSync('files')
        console.log(filesInFolder);
    }
    else {
        throw new Error('FS operation failed');
    }
};