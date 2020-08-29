#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);
let fileName = args[0] ? `${args[0]}.html` : 'index.html';
let title = args[1] || 'Title';

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
console.log( '\u279c' + " Boilerplate created" );


console.log(args);