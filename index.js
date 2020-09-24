#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

let fileName = 'index.html';
let title = 'Title';

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question('\u279c ' + `Enter a filename (default ${fileName}): `, answer => {
    if(answer && answer.length) {
        fileName = `${answer}.html`
    }

    interface.question('\u279c ' + `Enter a page title (default ${title}): `, answer => {
        if(answer && answer.length) {
            title = answer;
        }
        interface.close();

        const html = `
<!DOCTYPE html>
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

        console.log('\u263b ' + "File created "+ fileName    );
        console.log('\u263b ' + "Boilerplate ready" );

    });

});

