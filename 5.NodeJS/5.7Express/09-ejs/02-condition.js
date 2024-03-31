const ejs = require('ejs')
const fs = require('fs')

let isLogin = false
let html = fs.readFileSync('./02-condition.html', 'utf-8').toString()

let result = ejs.render(html, {isLogin: isLogin})

console.log(result)