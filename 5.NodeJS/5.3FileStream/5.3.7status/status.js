const fs = require('fs')

// stat
// __dirname: 文件所在目录的绝对路径
console.log(__dirname)
fs.stat('../5.3.2read/background_0.png', (err, data) => {
    if (err) {
        console.log("failed")
        return
    }
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})