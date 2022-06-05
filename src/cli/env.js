export const parseEnv = () => {
    const names = Object.keys(process.env)
    names.filter(e => e.startsWith('RSS_')).forEach(e => console.log(`${e}=${process.env[e]}`))
};