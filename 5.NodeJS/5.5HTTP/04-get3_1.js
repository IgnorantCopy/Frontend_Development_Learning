const http = require('http')
// 1.导入 url 模块
const url = require('url')

const server = http.createServer((request, response) => {
    // 2.解析 request.url
    let res = url.parse(request.url, true)
    // 路径
    console.log(res.pathname)
    // 查询字符串
    console.log(res.query.keyword)
    response.end('Hello HTTP Server')
})

server.listen(8080, () => {
    console.log("Start up!")
})