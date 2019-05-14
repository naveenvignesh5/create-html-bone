let chalk = require('chalk');

let logError = (error) => console.log(chalk.red.bold(error));

let logSuccess = (message) => console.log(chalk.green.bold(message));

module.exports = {
    logError,
    logSuccess,
};