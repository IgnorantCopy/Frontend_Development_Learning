function greet() {
    console.log("Hello!")
}

function farewell() {
    console.log("bye~")
}

// 暴露数据
// 方法1
module.exports = {
    farewell,
    greet,
}

// 方法2
// exports.greet = greet
// exports.farewell = farewell

/*
 * 注:
 *  ① module.exports 可以暴露任意数据
 *  ② exports = module.exports = {}
 *      所以不能用exports = value 来暴露(因为module.exports未发生变化)
 */