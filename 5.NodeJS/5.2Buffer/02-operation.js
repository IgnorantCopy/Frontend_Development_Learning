// Buffer 与字符串的转换
let buffer1 = Buffer.from([105, 108, 11, 118, 101, 121, 111, 117])
console.log(buffer1.toString()) // utf-8

// []
let buffer2 = Buffer.from('hello')
console.log(buffer2[0].toString(2))  // 转换为二进制: 011010000

// 溢出
console.log(buffer2)
buffer2[0] = 256    // 舍弃高位
console.log(buffer2)

// 中文
let buffer3 = Buffer.from('你好')
console.log(buffer3)