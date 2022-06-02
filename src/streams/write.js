export const write = async () => {
    const fs = await import('fs');
    let writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', data => {
        writeStream.write(data.toString())
    });
};