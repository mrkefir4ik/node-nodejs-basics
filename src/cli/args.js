export const parseArgs = () => {
    const args = process.argv
    let result = ''
    args.forEach((element, index, array) => {
        if (element.startsWith('--')) result += (` ${element.slice(2)} is ${array[index + 1]},`);
    });
    result && console.log(result.slice(0, -1));
};