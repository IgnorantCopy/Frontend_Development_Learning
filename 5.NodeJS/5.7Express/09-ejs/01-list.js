const ejs = require('ejs')
const fs = require('fs')

let names = ['John', 'Mary', 'Bob']

let html = fs.readFileSync('./01-names.html').toString()
let result = ejs.render(html, {names})

console.log(result)