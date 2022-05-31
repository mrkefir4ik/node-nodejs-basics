export const create = async () => {
    const fs = await import('fs');
    if (fs.existsSync('files/fresh.txt')) throw new Error('FS operation failed');
    else {
        fs.mkdir('files', { recursive: true }, (e) => null);
        fs.writeFile('files/fresh.txt', 'I am fresh and young', (e) => null);
    }
};