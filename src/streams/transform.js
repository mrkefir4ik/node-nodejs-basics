export const transform = async () => {
    const fs = await import('fs');
    const stream = await import('stream');

    const revertString = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""));
        },
    });

    process.stdin.pipe(revertString).pipe(process.stdout)
};