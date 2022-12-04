import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files');

const rename = async () => {
    fs.access(pathToFile, (err)=>{
        if (err) {
            throw 'FS operation failed' 
            
        } else {
            fs.rename(
                path.join(pathToFile, 'wrongFilename.txt'),
                path.join(pathToFile, 'properFilename.md'),
                (err1) => {
                    if (err1) throw 'FS operation failed';
                }
            )     
        }
    })
};

await rename();