#!/usr/bin/env node

const fs = require('fs');

const args = process.argv;

const FILE_NAME_OPTION = '--file-name';
const HTML_TITLE_OPTION = '--html-title';

const fileNameOptionIndex = args.findIndex((arg) => arg === FILE_NAME_OPTION);
const htmlTitleOptionIndex = args.findIndex((arg) => arg === HTML_TITLE_OPTION);

const fileNameOption = fileNameOptionIndex > -1 && args[fileNameOptionIndex + 1];
const titleOption = htmlTitleOptionIndex > -1 && args[htmlTitleOptionIndex + 1];

let fileName = fileNameOption ? `${fileNameOption}.html` : 'index.html';
let title = titleOption || 'Title';

const html = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
    </head>
    <body>
    </body>
</html>`;

fs.writeFile(fileName, html, error => {
    if (error) {
        console.log(error)
    }
});


console.log('\u279c ' + "Created "+ fileName    );
console.log('\u279c ' + "Boilerplate ready" );