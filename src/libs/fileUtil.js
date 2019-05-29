"use strict";

let fs = require('fs');
let path = require('path');

let { logError, logSuccess } = require('./util');

let createFile = (filePath, data) => {
    let dirPath = path.dirname(filePath);
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) logError(err);
        else fs.writeFileSync(filePath, data);
    });
};

let copyFile = (src, dest) => fs.copyFileSync(src, dest);

let mkdir = (path) => fs.mkdirSync(path);

module.exports = {
    createFile,
    copyFile,
    mkdir,
};
