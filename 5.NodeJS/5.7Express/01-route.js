// 1. 导入express模块
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由
/*
 * 路由的使用：
 *  ① 请求方法：get、post、put、delete等
 *      > 格式: app.<METHOD>(path, callback)
 *  ② 请求路径：/home
 *  ③ 回调函数：请求到达该路径后执行的函数
 */
app.get('/', (req, res) => {
    res.end('Home...')
})
app.get('/home', (req, res) => {
    res.end('Hello Express!')
})
app.post('/login', (req, res) => {
    res.end('Login...')
})
app.all('*', (req, res) => {
    res.end('404 Not Found')
})

// 4. 监听端口，启动服务
const port = 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})