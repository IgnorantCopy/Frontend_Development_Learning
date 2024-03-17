// 新建文件 abc.txt, 写入内容 'hello NodeJS'

// 1.导入 fs 模块
const fs = require('fs')

// 2.写入文件
/*
 * writeFile(file, data[, options], callback)
 * @param:
 *  file: 文件名
 *  data: 待写入数据
 *  options: 选项设置(optional)
 *  callback: 回调函数
 * @return: undefined
 */
// 异步写入
fs.writeFile('./abc.txt', 'hello NodeJS', err => {
    if (err) {
        console.log("failed")
        return
    }
    console.log("success")
})
console.log('finish')
// 同步写入
fs.writeFileSync('./def.txt', 'txt for test')
