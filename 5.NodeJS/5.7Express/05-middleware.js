// 记录每个请求的url和ip地址
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

/*
 * 中间件：一个回调函数，可以像一个路由回调一样访问请求对象(request)和响应对象(response),来封装公共操作,简化代码
 *  中间件分为全局中间件和路由中间件
 */

// 全局中间件
function recordMiddleware(req, res, next) {
    // 获取url和ip地址
    let {url, ip} = req
    // 将信息记录到日志文件中
    fs.appendFile(path.resolve(__dirname, 'access.log'), `${new Date()} ${url} ${ip}\n`, (err) => {
        if (err) {
            console.log(err)
        }
    })
    // 调用下一个中间件或路由回调函数
    next()
}

// 使用中间件函数
app.use(recordMiddleware)

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))
/*
 * 注:
 *  ① index.html文件为默认打开的资源
 *  ② 如果静态资源与路由规则同时匹配,谁写在上面就先匹配谁
 *  ③ 路由一般响应动态资源, 静态资源中间件一般响应静态资源
 */

app.get('/home', (req, res) => {
    res.send('前台首页')
})

// 检测是否有code=521的请求参数
// 路由中间件
let checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗号错误')
    }
}

app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})

app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})