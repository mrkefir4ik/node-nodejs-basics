export const compress = async () => {
    const fs = await import('fs');
    const zlib = await import('zlib');

    const zipStream = zlib.createGzip();
    const file = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('src/zip/files/archive.gz');
    file.pipe(zipStream).pipe(writeStream);
};