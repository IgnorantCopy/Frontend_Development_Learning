// 1.引入fs
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('./background_0.png')

// 3.绑定 data 事件
rs.on('data', chunk => {
    console.log(chunk.length)
})

// 4.(optional) 绑定 end 事件
rs.on('end', () => {
    console.log('finish')
})
