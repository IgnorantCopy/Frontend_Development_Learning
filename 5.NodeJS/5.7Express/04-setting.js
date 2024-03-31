const express = require('express')

const app = express()

app.get('/response', (req, res) => {
    // 原生响应
    // res.statusCode = 404
    // res.statusMessage = 'Not Found'
    // res.setHeader('xxx', 'yyy')
    // res.write('hello express\n')
    // res.end('response')

    // express 响应
    res.status(500).set('xxx', 'yyy').send('你好 express')    // 链式调用
})

app.get('/other', (req, res) => {
    // 跳转响应: 重定向
    res.redirect('http://www.baidu.com')
    // 下载响应
    res.download(__dirname + '/package.json')
    // json响应
    res.json({name: 'express', version: '4.17.1'})
    // 响应文件内容
    res.sendFile(__dirname + '/01-form.html')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})