const express = require('express')
const path = require('path')

const app = express()

// 1.设置模板引擎
app.set('view engine', 'ejs')
// 2.设置模板文件(具有模板语法内容的文件)存放位置
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
    // 3.render响应
    let title = 'Welcome to my website'
    res.render('home', {title})
    // 4.创建模板文件
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})