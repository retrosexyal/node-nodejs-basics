import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, "files");

const list = async () => {
  fs.access(pathToFile, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
        fs.readdir(pathToFile, (err, data) => {
            if (err) {
              throw err;
            }
            data.forEach((e) => {
              console.log(e)
            });
          });
    }
  });

  
};

await list();
