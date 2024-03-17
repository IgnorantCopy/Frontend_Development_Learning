const http = require('http')
const fs = require('fs')
const path = require('path')

let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json',
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405
        response.end('<h1>405 Method Not Allowed</h1>')
        return
    }
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    let root = __dirname + '/07-setExercise'
    let filePath = root + pathname
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('content-type', 'text/html;charset=utf-8')
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end('<h1>404 Not Found</h1>')
                    break
                case 'EPERM':
                    response.statusCode = 403
                    response.end('<h1>403 Forbidden</h1>')
                    break
                default:
                    response.statusCode = 500
                    response.end('<h1>Internal Server Error</h1>')
            }
            return
        }
        // 获取文件后缀名
        let ext = path.extname(filePath).slice(1)
        // 获取对应的类型
        let type = mimes[ext]
        if (type) {
            response.setHeader('content-type', type + 'charset=utf-8')
        } else {
            // 对于未知的资源类型,可以选择 application/octet-stream 类型,浏览器在遇到该类型时,会对响应体内容进行独立存储,也就是下载效果
            response.setHeader('content-type', 'application/octet-stream')
        }
        response.end(data)
    })
})

server.listen(8080, () => {
    console.log("Start up!")
})