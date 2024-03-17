// 1.引入fs
const fs = require('fs')

// 2.异步读取
fs.readFile('../5.3.1write/demo.txt', (err, data) => {
    if (err) {
        console.log("failed")
        return
    }
    console.log(data.toString())
})

// 3.同步读取
let data = fs.readFileSync('../5.3.1write/demo.txt')
console.log(data.toString())
