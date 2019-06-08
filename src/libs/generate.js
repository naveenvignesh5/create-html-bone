let process = require('process');

let templates = require('../templates/template');
let fileUtil = require('./fileUtil');

const generateHTML = (app, cssType = '', jquery = false) => {
    let css = cssType.toLowerCase().trim();

    let htmlFile = `${process.cwd()}/${app}/index.html`;

    let htmlFileData = '';

    if (css === 'bootstrap') htmlFileData = templates.bootstrap.html;
    else if (css === 'bulma') htmlFileData = templates.bulma.html;
    else if (css === 'materialize') htmlFileData = templates.materialize.html;
    else htmlFileData = templates.basic.html(jquery);

    fileUtil.createFile(htmlFile, htmlFileData);
};

const generateJS = (app, withJQuery) => {
    let jsFile = `${process.cwd()}/${app}/js/scripts.js`;

    let jsFileData = '';

    if (withJQuery) jsFileData = templates.jquery;

    fileUtil.createFile(jsFile, jsFileData);
};

const generateCSS = (app) => {
    let cssFile = `${process.cwd()}/${app}/css/styles.css`;

    let cssFileData = '';

    fileUtil.createFile(cssFile, cssFileData);
};

const generateAuxFiles = (app, options = {}) => {
    let parentDir = `${process.cwd()}/${app}`;
    fileUtil.copyFile(`${__dirname}/../assets/favicon.ico`, `${parentDir}/favicon.ico`);

    if (!options.otherOptions) options.otherOptions = [];
    
    // generating gulp file
    if (options.gulp || options.otherOptions.includes('Gulp')) {
        fileUtil.createFile(`${parentDir}/gulpfile.js`, templates.gulp);
        fileUtil.createFile(`${parentDir}/package.json`, templates.pkgJson({ name: app }));
        fileUtil.createFile(`${parentDir}/.gitignore`, templates.gitIgnore)

        fileUtil.mkdir(`${process.cwd()}/${app}/assets`);
    }

    try {
        // generating heroku config
        if (options.heroku || options.otherOptions.includes('Heroku')) {
            fileUtil.createFile(`${parentDir}/index.php`, `<?php header( 'Location: ${options.otherOptions.includes('Gulp') ? "/build/home.html" : "/home.html"}' );  ?>`);
            fileUtil.moveFile(`${parentDir}/index.html`,`${parentDir}/home.html`);
        }
    } catch (err) {
        console.log('heroku error', err);
    }
};

module.exports = {
    generateHTML,
    generateJS,
    generateCSS,
    generateAuxFiles,
};
