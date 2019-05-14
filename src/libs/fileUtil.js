"use strict";

let fs = require('fs');

let createFile = (path, data, cb) => {
    if (fs.existsSync())
    fs.writeFile(path, data, cb);
};

module.exports = {
    createFile,
};
