const fs = require('fs')
const process = require('process')

// 方法1:
// let data = fs.readFileSync('../5.3.2read/background_0.png')
// fs.writeFileSync('./background_0.png', data)
// console.log(process.memoryUsage())  // 34131968B == 32.5MB

// 方法2:
const rs = fs.createReadStream('../5.3.2read/background_0.png')
const ws = fs.createWriteStream('./background_0.png')
rs.on('data', chunk => {
    ws.write(chunk)
})

rs.on('end', () => {
    console.log(process.memoryUsage())  // 34611200B == 33MB
})