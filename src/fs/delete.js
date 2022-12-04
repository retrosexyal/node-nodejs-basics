import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, "files");

const remove = async () => {
  fs.access(pathToFile, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.unlink(path.join(pathToFile, "fileToRemove.txt"), (err1) => {
        if (err1) throw new Error('FS operation failed');
      });
    }
  });
};

await remove();
