let chalk = require('chalk');
let inquirer = require('inquirer');
let figlet = require('figlet');

let prompt = inquirer.createPromptModule();

let { logError, logSuccess } = require('./src/libs/util');

let runByInquirer = async () => {
    // figlet('Bone', async (err, data) => {
    //     if (err) {
    //         logError(err);
    //         return;
    //     }
    //     console.log(chalk.yellow.bold(data));
    //     try {
    //         console.log(chalk.blue.bold("Enter project details..."));
    
    //         let { app = '' } = await prompt([
    //             {
    //                 type: "input",
    //                 name: "app",
    //                 message: "What is the name of the project ?"
    //             },
    //         ]);
    
    //         if (!app) {
    //             logError("Enter a project name !!!");
    //             return;
    //         }
    
    //         let options = await prompt([
    //             {
    //                 type: "list",
    //                 choices: CSS_TYPES,
    //                 name: "css",
    //                 message: "What is your preferred CSS framework ?"
    //             },
    //             {
    //                 type: "confirm",
    //                 name: "jquery",
    //                 message: "Generate with jQuery Templated javascript",
    //             },
    //             {
    //                 type: "confirm",
    //                 name: "gulp",
    //                 message: "Generate with gulp file",
    //             }
    //         ]);
    
    //         if (!options.css) {
    //             logError("Select a CSS framework");
    //             return;
    //         }
    
    //         generateProject(app, options);
    
    //         logSuccess("Template has been generated.");
    //     } catch (err) {
    //         logError(err);
    //     }
    // });
    let options = await prompt([
        {
            type: "checkbox",
            name: "options",
            message: "What configs you require ?",
            choices: ["abc", "def", "xyz"]
        }
    ]);

    console.log(options);
};

runByInquirer();