export const create = async () => {
    const fs = await import('fs');
    if (fs.existsSync('files/fresh.txt')) throw new Error('FS operation failed');
    else {
        fs.mkdirSync('files', { recursive: true });
        fs.writeFileSync('files/fresh.txt', 'I am fresh and young', (e) => null);
    }
};