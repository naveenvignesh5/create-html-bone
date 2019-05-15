#!/usr/bin/env node

let inquirer = require('inquirer');
let chalk = require('chalk');

let { generateHTML, generateJS, generateCSS, generateFavicon } = require('./libs/generate');
let { logError } = require('./libs/util');

let prompt = inquirer.createPromptModule();

let run = async () => {
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
                choices: ["Bootstrap 4", "Bulma", "Materialize", "None"],
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

        generateHTML(app, css);
        generateJS(app, jquery);
        generateCSS(app);
        generateFavicon(app);
    } catch (err) {
        logError(err);
    }
}

run();
