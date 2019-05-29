let chalk = require('chalk');
let inquirer = require('inquirer');
let figlet = require('figlet');

let { generateHTML, generateJS, generateCSS, generateFavicon } = require('./generate');
let { logError, logSuccess } = require('./util');

let { CSS_TYPES } = require('./../constants');

let prompt = inquirer.createPromptModule();

let generateProject = (app, css, jquery) => {
    generateHTML(app, css, jquery);
    generateJS(app, jquery);
    generateCSS(app);
    generateFavicon(app);
}

let runByInquirer = () => {
    figlet('Bone', async (err, data) => {
        if (err) {
            logError(err);
            return;
        }
        console.log(chalk.yellow.bold(data));
        try {
            console.log(chalk.blue.bold("Enter project details..."));
    
            let { app = '' } = await prompt([
                {
                    type: "input",
                    name: "app",
                    message: "What is the name of the project ?"
                },
            ]);
    
            if (!app) {
                logError("Enter a project name !!!");
                return;
            }
    
            let { css = '', jquery = false } = await prompt([
                {
                    type: "list",
                    choices: CSS_TYPES,
                    name: "css",
                    message: "What is your preferred CSS framework ?"
                },
                {
                    type: "confirm",
                    name: "jquery",
                    message: "Generate with jQuery Templated javascript",
                },
            ]);
    
            if (!css) {
                logError("Select a CSS framework");
                return;
            }
    
            generateProject(app, css, jquery);
    
            logSuccess("Template has been generated.");
        } catch (err) {
            logError(err);
        }
    });
};

let runByCommandLine = async (args) => {
    try {
        let { name = '', css = '', jquery = false } = args;
        if (!name) {
            logError("Enter a project name !!!");
            return;
        }
        
        generateProject(name, css, jquery);
    
        logSuccess("Template has been generated.");
    } catch (err) {
        logError(err);
    }
};

module.exports = {
    runByInquirer,
    runByCommandLine,
};
