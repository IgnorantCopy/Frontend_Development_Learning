const path = require('path')

// 1.resolve(): 拼接规范的绝对路径
console.log(path.resolve(__dirname, '../index.html'))

// 2.sep: 当前操作系统下的分隔符
console.log(path.sep)

// 3.parse(): 解析路径
console.log(path.parse(__filename))

// 4.basename()
console.log(path.basename(__filename))

// 5.dirname()
console.log(path.dirname(__filename))

// 6.extname()
console.log(path.extname(__filename))
