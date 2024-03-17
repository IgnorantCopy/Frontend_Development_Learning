const http = require('http')

const server = http.createServer((request, response) => {
    // 1.设置响应状态码
    response.statusCode = 404
    // 2.设置响应状态的描述
    response.statusMessage = "You've got mail"
    // 3.设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 自定义响应头
    response.setHeader('test', ['a', 'b', 'c'])
    // 4.设置响应体
    response.write('mail')
    response.end('http')
})

server.listen(8080, () => {
    console.log("Start up!")
})