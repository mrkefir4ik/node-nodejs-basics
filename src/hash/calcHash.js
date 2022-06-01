export const calculateHash = async () => {
    const crypto = await import('crypto');
    const fsPromises = await import('fs/promises');

    const giveHash = async () => {
        const result = await fsPromises.readFile('src/hash/files/fileToCalculateHashFor.txt')
            .then(data => crypto.createHash('sha256').update(data).digest('hex'))

        return result
    }
    console.log(await giveHash());
    return await giveHash()

};
