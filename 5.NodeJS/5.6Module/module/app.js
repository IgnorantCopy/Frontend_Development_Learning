// 用伪代码展示require导入模块的基本流程
function require(file) {
    // 1.将相对路径转换为绝对路径
    let absolutePath = path.resolve(__dirname, file)
    // 2.缓存检测
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }
    // 3.读取文件代码
    let code = fs.readFileSync(absolutePath).toString()
    // 4.包裹为一个函数之后执行
    let module = {}
    let exports = module.exports = {}
    (function (exports, require, module, __filename, __dirname) {
            module.exports = {
                name: "Ignorant"
            }

            // 输出
            console.log(arguments.callee.toString())
        }
    )(exports, require, module, __filename, __dirname)
    // 5.缓存结果
    caches[absolutePath] = module.exports
    return module.exports
}

const me = require('./me.js')
