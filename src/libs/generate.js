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

const generateFavicon = (app) => {
    fileUtil.copyFile(`${__dirname}/../assets/favicon.ico`, `${process.cwd()}/${app}/favicon.ico`);
};

module.exports = {
    generateHTML,
    generateJS,
    generateCSS,
    generateFavicon,
};
