import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const read = async () => {
    const stdin = createReadStream(__dirname + '/files/fileToRead.txt', 'utf-8')
    stdin.pipe(process.stdout);
};

await read();