// 1.导入 http 模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')   // 处理中文
    response.end('Hello HTTP Server')   // 设置响应体
})

// 3.监听窗口，启动服务
// http默认端口号:80, https默认端口号：443, 常用端口号: 3000 8080 8090 9000
server.listen(8080, () => {
    console.log("Start up!")
})