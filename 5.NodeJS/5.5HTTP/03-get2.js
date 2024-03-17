const http = require('http')

const server = http.createServer((request, response) => {
    // 获取请求体
    // 1.声明变量
    let body = ''
    // 2.绑定data事件
    request.on('data', chunk => {
        body += chunk
    })
    // 3.绑定end事件
    request.on('end', () => {
        console.log(body)
        // 响应
        response.end('http')
    })
    response.end('Hello HTTP Server')
})

server.listen(8080, () => {
    console.log("Start up!")
})