"use strict";

let fs = require('fs');
let path = require('path');

let { logError } = require('./util');

let createFile = (filePath, data) => {
    try {
        let dirPath = path.dirname(filePath);
        fs.mkdirSync(dirPath, { recursive: true });
        fs.writeFileSync(filePath, data);
    } catch (err) {
        logError(err);
    }
};

let copyFile = (src, dest) => fs.copyFileSync(src, dest);

let moveFile = (src, dest) => fs.renameSync(src, dest);

let mkdir = (path) => fs.mkdirSync(path);

module.exports = {
    createFile,
    copyFile,
    moveFile,
    mkdir,
};
