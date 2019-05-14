#!/usr/bin/env node
let inquirer = require('inquirer');
let chalk = require('chalk');

let { generateHTML, generateJS, generateCSS } = require('./libs/generate');
let { logError } = require('./libs/util');

let prompt = inquirer.createPromptModule();

let run = async () => {
    try {
        console.log(chalk.blue.bold("Choose a CSS Framework"));
        let { app, css, jquery = false } = await prompt([
            {
                type: "input",
                name: "app",
                message: "What is the name of the project ?"
            },
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
        
        generateHTML(app, css);
        generateJS(app, jquery);
        generateCSS(app);

    } catch (err) {
        logError(err);
    }
}

run();
