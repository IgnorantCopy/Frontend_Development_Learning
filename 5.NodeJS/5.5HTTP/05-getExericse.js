const http = require('http')

const server = http.createServer((request, response) => {
    // 实例化 url 对象
    let {method} = request
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    response.setHeader('content-type', 'text/html;charset=utf-8')
    if (method === 'GET' && pathname === '/login') {
        response.end('登录')
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('注册')
    } else {
        response.end('404 Not Found!!!')
    }
})

server.listen(8080, () => {
    console.log("Start up!")
})