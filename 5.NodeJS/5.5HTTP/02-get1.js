const http = require('http')

const server = http.createServer((request, response) => {
    // 获取请求的方法
    console.log(request.method)
    console.log()
    // 获取请求的 url
    console.log(request.url)
    console.log()
    // 获取 HTTP 协议的版本号
    console.log(request.httpVersion)
    console.log()
    // 获取 HTTP 的请求头
    console.log(request.headers)
    console.log()
    response.end('Hello HTTP Server')
})

server.listen(8080, () => {
    console.log("Start up!")
})