const parseArgs = () => {
    const argsArr = [];
     process.argv.forEach((e, ind) =>{
        if (e.startsWith('--')) {
            argsArr.push(`${e.slice(2)} is ${process.argv[ind+1]}`)
        }
     })
     return console.log(argsArr.join(', '))
};

parseArgs();