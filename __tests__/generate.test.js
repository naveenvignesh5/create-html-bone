const { readFileSync } = require('fs');
const { generateHTML, generateCSS, generateJS, generateAuxFiles } = require('../src/libs/generate');
const template = require('../src/templates/template');

describe('testing generateHTML', () => {
    it('generates index.html', () => {
        try {
            generateHTML('testProject');
            expect(readFileSync(`${__dirname}/../testProject/index.html`).toString())
                .toBe(template.basic.html(false));
        } catch (err) {
            throw err;
        }
    });
});

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

describe('testing generateAuxFiles', () => {
    const gulpFile = `${__dirname}/../testProject/gulpfile.js`;
    it('generates gulpfile.js via commander', () => {
        let options = { otherOptions: [], gulp: true, heroku: false };
        try {
            generateAuxFiles('testProject', options);
            const gulpContent = readFileSync(gulpFile).toString();
            expect(gulpContent).toBe(template.gulp(options))
        } catch (err) {
            throw err;
        }
    });

    it('generates gulpfile.js via inquirer', () => {
        let options = { otherOptions: [ 'Gulp' ] };
        try {
            generateAuxFiles('testProject', options);
            const gulpContent = readFileSync(gulpFile).toString();
            expect(gulpContent).toBe(template.gulp(options));
        } catch (err) {
            throw err;
        }
    });

    it('generates heroku deployment files via commander', () => {
        let options = { otherOptions: [], heroku: false };
        try {
            generateAuxFiles('testProject', options);
            const gulpContent = readFileSync(gulpFile).toString();
            expect(gulpContent).toBe(template.gulp(options));
        } catch (err) {
            throw err;
        }
    });
});
