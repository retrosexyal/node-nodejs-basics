import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, "files" , 'fileToRead.txt');

const read = async () => {
    fs.access(pathToFile, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        } else {
            fs.readFile(pathToFile, 'utf8', (err, data) => {
                if (err) {
                  throw err;
                }
                console.log(data)
              });
        }
      });
};

await read();