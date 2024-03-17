console.log("Hello NodeJS")
// nodeJS 不能使用BOM、DOM、AJAX等的API
// // BOM
// console.log(window)
// console.log(history)
// console.log(navigator)
// console.log(location)
// // DOM
// console.log(document)
// // AJAX
// let xhr = new XMLHttpRequest()

// console、定时器可以使用
setTimeout(() => {
    console.log("Hello")
}, 1000)

// global顶级对象
console.log(globalThis)
