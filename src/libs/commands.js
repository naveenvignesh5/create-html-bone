let chalk = require('chalk');
let inquirer = require('inquirer');
let figlet = require('figlet');

let { generateHTML, generateJS, generateCSS, generateAuxFiles } = require('./generate');
let { logError, logSuccess } = require('./util');

let { CSS_TYPES } = require('./../constants');

let prompt = inquirer.createPromptModule();

let generateProject = (app, options) => {
    const { css, jquery } = options;
    generateHTML(app, css, jquery);
    generateJS(app, jquery);
    generateCSS(app);
    generateAuxFiles(app, options);
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
    
            let options = await prompt([
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
                {
                    type: "confirm",
                    name: "gulp",
                    message: "Generate with gulp file",
                }
            ]);
    
            if (!options.css) {
                logError("Select a CSS framework");
                return;
            }
    
            generateProject(app, options);
    
            logSuccess("Template has been generated.");
        } catch (err) {
            logError(err);
        }
    });
};

let runByCommandLine = async (args) => {
    try {
        let { name = '' } = args;
        if (!name) {
            logError("Enter a project name !!!");
            return;
        }
        
        generateProject(name, args);
    
        logSuccess("Template has been generated.");
    } catch (err) {
        logError(err);
    }
};

module.exports = {
    runByInquirer,
    runByCommandLine,
};
