#!/usr/bin/env node
let process = require('process');
let inquirer = require('inquirer');
let chalk = require('chalk');

let templates = require('./templates/template');
let fileUtil = require('./libs/fileUtil');

let prompt = inquirer.createPromptModule();

let logError = (error) => console.log(chalk.red.bold(error));

let logSuccess = (message) => console.log(chalk.green.bold(message));

let run = async () => {
    try {
        console.log(chalk.blue.bold("Choose a CSS Framework"));
        let { app, css } = await prompt([
            {
                type: "input",
                name: "app",
                message: "What is the name of the project ?"
            },
            {
                type: "list",
                choices: ["Bootstrap 4", "Bulma", "None"],
                name: "css",
                message: "What is your preferred CSS framework ?"
            }
        ]);
        console.log(chalk.blue(app), chalk.cyan.bold(css));
        
        let htmlFile = `${process.cwd()}/${app}/index.html`;

        let htmlFileData = '';

        if (css === 'Bootstrap 4') htmlFileData = templates.bootstrap.html;
        else if (css === 'Bulma') htmlFileData = templates.bulma.html;

        fileUtil.createFile(htmlFile, htmlFileData, (err, data) => {
            if (err) logError(err);
            else logSuccess("Template Generated");
        });
    } catch (err) {
        logError(err);
    }
}

run();
