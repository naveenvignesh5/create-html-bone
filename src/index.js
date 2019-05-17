#!/usr/bin/env node
let program = require('commander');
let process = require('process');
let pkgVersion = require('root-require')('package.json').version;

let { runByCommandLine, runByInquirer } = require('./libs/commands');

program
    .version(pkgVersion)
    .option('-n, --name [value]', "Name of the project")
    .option('-c, --css [value]', "CSS Framework (Bootstrap 4, Bulma, Materialize, Pure)")
    .option('-j, --jquery', "Generate js with JQuery template")
    .action((res) => {
        if (res.args.length > 0) runByCommandLine(res);
        else runByInquirer();
    });

program.parse(process.argv);
