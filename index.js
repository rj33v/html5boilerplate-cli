#!/usr/bin/env node


const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Title>
    </head>
    <body>
    </body>
</html>`;

fs.writeFile('index.html', html, error => {
    if (error) {
        console.log(error)
    }
});
console.log( '\u279c' + " Boilerplate created" );