const { readFileSync } = require('fs');
const { generateCSS, generateJS } = require('../src/libs/generate');
const template = require('../src/templates/template');

describe('testing generateCSS', () => {
    it('generates styles.css file', () => {
        try {
            generateCSS('testProject');
            readFileSync(`${__dirname}/../testProject/css/styles.css`);
        } catch (err) {
            throw err;
        }
    });
});

describe('testing generateJS', () => {
    const scriptFile = `${__dirname}/../testProject/js/scripts.js`;
    it('generates scripts.js file', () => {
        try {
            generateJS('testProject');
            const jsContent = readFileSync(scriptFile).toString();
            expect(jsContent).toBeFalsy();
        } catch (err) {
            throw err;
        }
    });

    it('generates scripts.js file with jquery', () => {
        try {
            generateJS('testProject', true);
            const jsContent = readFileSync(scriptFile).toString();
            expect(jsContent).toBe(template.jquery);
        } catch (err) {
            throw err;
        }
    });
});
