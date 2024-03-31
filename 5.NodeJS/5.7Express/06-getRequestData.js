/*
 * 搭建 HTTP 服务:
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 */
const express = require('express')
const app = express()
// 解析json格式的请求体的中间件: const jsonParser = require('body-parser').json()
// 解析querystring格式的请求体的中间件
const urlencodedParser = require('body-parser').urlencoded({extended: false})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/06-form.html')
})

app.post('/login', urlencodedParser, (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})