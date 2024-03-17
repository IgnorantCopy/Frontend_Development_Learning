const http = require('http')

const server = http.createServer((request, response) => {
    // 实例化 url 对象
    let url = new URL(request.url, "http://127.0.0.1")
    // 输出
    console.log(url.pathname)
    // 输出 keyword 查询字符串
    console.log(url.searchParams.get('keyword'))
    response.end('Hello HTTP Server')
})

server.listen(8080, () => {
    console.log("Start up!")
})