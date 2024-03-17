// 导入模块
const me = require('./me')   // ./不能省略, 可以省略.js

// 调用
me.greet()
me.farewell()

// 导入json文件
const pac = require('./package.json')

console.log(pac)    // 输出对象

// 导入其他类型的文件, 会将该文件以js的语法导入
const test = require('./test')
console.log(test)

// 导入文件夹
// 1.检测该文件夹下 package.json 文件中 main 属性对应的文件, 存在则导入, 不存在则报错
// 2.无需添加./
const app = require('module')
console.log(app)