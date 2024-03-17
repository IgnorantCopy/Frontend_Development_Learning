const fs = require('fs')

// 方法1: unlink(path, callback)
// fs.unlink('./abc.txt', err => {
//     if (err) {
//         console.log("failed")
//         return
//     }
//     console.log("success")
// })

// 方法2: rm(path, callback)
fs.rm('./abc.txt', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})