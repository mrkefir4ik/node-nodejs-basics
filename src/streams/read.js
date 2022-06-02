export const read = async () => {
    const fs = await import('fs');
    let stream = fs.createReadStream('src/streams/files/fileToRead.txt');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk.toString())
    })
};