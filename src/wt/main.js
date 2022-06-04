export const performCalculations = async () => {
    const { Worker } = await import('worker_threads')
    const os = await import('os')
    const results = os.cpus().map((e, index, arr) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: { data: 10 + index } });
            worker.on('message', result => {
                resolve({
                    status: 'resolved',
                    data: result,
                })
            });
            worker.on('error', error => {
                resolve({
                    status: 'error',
                    data: null,
                })
            });
        })
    })
    return (await Promise.allSettled(results)).map(e => e.value);


}
performCalculations().then(data => console.log(data))