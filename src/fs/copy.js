import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files');
const pathToCopyFile = path.join(__dirname, 'files_copy');


const copy = async () => {
    fs.access(pathToFile, (err)=>{
        if (err) {
            throw 'FS operation failed'
        } else {   
           fs.mkdir(pathToCopyFile, err=>{
            if(err) {
                throw 'FS operation failed'}})      
        }
    })

    fs.readdir(pathToFile,(err, data) => {
        if (err) {
            throw err;
        }
        function copyFile (el, newPath, newPathCopy) {
            
            fs.stat(path.join(newPath, el), (err, stats)=>{
                if (err) throw err;
                if (stats.isFile()) {
                    fs.copyFile(path.join(newPath, el), path.join(newPathCopy, el), err =>{
                        if (err) throw err
                    })
                } else if (stats.isDirectory()) {
                    newPathCopy = path.join(newPathCopy, el);
                    newPath = path.join(newPath, el);
                    fs.mkdir(newPathCopy, err=>{
                        if(err) {
                            throw err}})
                    fs.readdir(newPath, (err, newData)=>{
                        if (err) throw err;
                        newData.forEach(elem => {       
                            copyFile(elem, newPath, newPathCopy)
                        })
                    })
                }
                
            })
        }

        data.forEach(e => {
            
                copyFile(e, pathToFile, pathToCopyFile)

        })


    })
};

copy();