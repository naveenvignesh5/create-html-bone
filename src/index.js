#!/usr/bin/env node
let program = require('commander');
let process = require('process');
let pkgVersion = require('root-require')('package.json').version;

let { runByCommandLine, runByInquirer } = require('./libs/commands');
let { validateName } = require('./libs/util');

program
    .version(pkgVersion)
    .option('-n, --name [value]', "Name of the project")
    .option('-c, --css [value]', "CSS Framework (Bootstrap 4, Bulma, Materialize, Pure)")
    .option('-j, --jquery', "Generate js with JQuery template")
    .parse(process.argv);

const { css = '', name = '', jquery = false } = program;
if ((name && validateName(name)) || css  || jquery) runByCommandLine(program);
else runByInquirer();