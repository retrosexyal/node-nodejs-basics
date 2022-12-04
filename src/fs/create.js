import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    fs.access(pathToFile, (err)=>{
        if (err) {
            fs.writeFile(
                pathToFile,
                'I am fresh and young',
                (err1) => {
                    if (err1) throw err1;
                }
            )
        } else {
           throw new Error('FS operation failed');        
        }
    })

    
};

await create();