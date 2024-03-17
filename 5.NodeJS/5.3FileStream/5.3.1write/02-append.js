// 向 abc.txt 文件中追加写入 hello html5

// 1.引入 fs 模块
const fs = require('fs')

// 2.调用 appendFile
/*
 * appendFile(path, data[, options], callback)
 * @param:
 *  file: 文件名
 *  data: 待写入数据
 *  options: 选项设置(optional)
 *  callback: 回调函数
 * @return: undefined
 */
// 方法1:
fs.appendFile('./abc.txt', '\nhello html5', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})

// 方法2:
fs.writeFile('./abc.txt', '\nhello css3', {flag: 'a'}, err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})

