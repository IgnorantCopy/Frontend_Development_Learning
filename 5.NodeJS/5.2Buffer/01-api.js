// 1.alloc
let buffer1 = Buffer.alloc(10)
console.log(buffer1)

// 2.allocUnsafe
let buffer2 = Buffer.allocUnsafe(10000)
console.log(buffer2)

// 3.from
let buffer3 = Buffer.from('hello')
let buffer4 = Buffer.from([105, 108, 11, 118, 101, 121, 111, 117])
console.log(buffer3)
console.log(buffer4)