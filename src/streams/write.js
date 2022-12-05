import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


const write = async () => {
    const stdout = createWriteStream(__dirname + '/files/fileToWrite.txt', 'utf-8')
    process.stdin.pipe(stdout); 
};

await write();