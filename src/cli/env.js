
const parseEnv = () => {
    /* process.env.RSS_name1 = 'value';
    process.env.RSS_name2 = 'value'; */
    const arrOfRss = []
    Object.entries(process.env).forEach(([key, value]) =>{
        key.startsWith('RSS_')?arrOfRss.push(`${key}=${value}`):'';
    })
    return console.log(arrOfRss.join('; '));
};

parseEnv();