const util = require('util');
const fs = require('fs');

let readFile = util.promisify(fs.readFile);
readFile('../resources/content.txt').then(value => {
    console.log(value.toString());
})