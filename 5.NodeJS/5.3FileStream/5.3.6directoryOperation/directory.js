const fs = require('fs')

// 1.创建文件夹: mkdir(path[,options], callback)
fs.mkdir('./untitled', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})

// 2.递归创建
fs.mkdir('./a/b/c', {recursive: true}, err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})

// 3.读取文件夹: readdir(path, callback)
fs.readdir('../5.3.1write', (err, data) => {
    if (err) {
        console.log("failed")
        return
    }
    console.log(data)
})

// 4.删除文件夹: rmdir(path[, options], callback)
fs.rmdir('./untitled', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})

// 5.递归删除
// 方法1: deprecated
// fs.rmdir('./a', {recursive: true}, err => {
//     if (err) {
//         console.log("failed")
//         return
//     }
//     console.log("success")
// })

// 方法2:
fs.rm('./a', {recursive: true}, err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})
