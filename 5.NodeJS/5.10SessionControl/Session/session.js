const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()

app.use(session({
    name: 'sid',    // 设置cookie名称 默认为connect.sid
    secret: 'keyboard cat',     // 设置加密字符串(又称签名/加盐)
    saveUninitialized: false,  // 是否为每次请求都设置一个cookie用来储存session的id
    resave: false,      // 是否在每次请求时重新保存session，默认true
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
    }),
    cookie: {
        httpOnly: true,     // 开启前后端无法通过 JS 操作
        maxAge: 5 * 60 * 1000,      // 控制sessionID的过期时间
    }
}))

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++
        res.send(`You visited this page ${req.session.views} times.`)
    } else {
        req.session.views = 1
        res.send('Welcome to this page for the first time!')
    }
})

// 登录
app.get('/login', (req, res) => {
    // username=admin&password=admin
    const {username, password} = req.query
    if (username === 'admin' && password === 'admin') {
        req.session.username = username
        res.send('Login success!')
    } else {
        res.send('Login failed!')
    }
})

// 读取
app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send(`Welcome back, ${req.session.username}! Your cart is empty.`)
    } else {
        res.send('Please login first!')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
            return
        }
        res.send('Logout success!')
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

/*
 * cookie vs session
 *  1.存在的位置:
 *      > cookie: 浏览器端
 *      > session: 服务器端
 *  2.安全性:
 *      > cookie是以明文的方式存放在客户端的,安全性相对较低
 *      > session数据存储在服务器,安全性较高
 *  3.网络传输量:
 *      > cookie设置内容过多会增大报文体积,影响网络传输效率
 *      > session数据存储在服务器,只是通过cookie传递id,不影响传输效率
 *  4.存储限制:
 *      > 浏览器限制单个cookie保存的数据不超过4KB,且单个域名下的存储量也有限制
 *      > session数据存储在服务器中,所以没有这些限制
 */