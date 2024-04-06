const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
    // maxAge: 最大存活时间，单位是毫秒，报文中单位是秒
    res.cookie('name', 'Ignorant', {maxAge: 3600 * 1000, httpOnly: true})   // 会在浏览器关闭的时候销毁
    res.cookie('theme', 'light')
    res.send('Cookie set')
})

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name')
    res.send('Cookie removed')
})

app.get('/get-cookie', (req, res) => {
    const name = req.cookies.name
    if (name) {
        res.send(`Cookie value: ${name}`)
    } else {
        res.send('No cookie found')
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})