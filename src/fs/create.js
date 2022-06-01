export const create = async () => {
    const fs = await import('fs');
    if (fs.existsSync('src/fs/files/fresh.txt')) throw new Error('FS operation failed');
    else {
        fs.mkdir('src/fs/files', { recursive: true }, (e) => null);
        fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (e) => null);
    }
};