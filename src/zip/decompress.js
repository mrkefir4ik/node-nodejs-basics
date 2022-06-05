export const decompress = async () => {
    const fs = await import('fs');
    const zlib = await import('zlib');

    const unzipStream = zlib.createGunzip();
    const file = fs.createReadStream('src/zip/files/archive.gz');
    const writeStream = fs.createWriteStream('src/zip/files/fileToCompress.txt');
    file.pipe(unzipStream).pipe(writeStream);
};
