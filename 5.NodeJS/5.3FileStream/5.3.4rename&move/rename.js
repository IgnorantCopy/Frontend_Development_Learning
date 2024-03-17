const fs = require('fs')

/*
 * rename(oldPath, newPath, callback)
 * @param:
 *  oldPath: 文件当前路径
 *  newPath: 新文件路径
 *  callback: 回调函数
 */
fs.rename('../5.3.1write/demo.txt', './java.txt', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})