export const spawnChildProcess = async (args) => {
    const { fork } = await import('child_process');
    fork('src/cp/files/script.js', args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    })
};
spawnChildProcess([1, 2, 3])