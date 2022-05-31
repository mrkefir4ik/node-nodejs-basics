export const copy = async () => {
    const fs = await import('fs');
    if (!fs.existsSync('files') || fs.existsSync('files_copy')) throw new Error('FS operation failed');
    else {
        fs.mkdir('files_copy/files', { recursive: true }, (e) => null);
        const filesToCopy = fs.readdirSync('files')
        filesToCopy.forEach(e => {
            fs.copyFile(`files/${e}`, `files_copy/files/${e}`, e => null)
        })
    }
};