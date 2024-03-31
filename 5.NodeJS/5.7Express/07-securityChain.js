const express = require('express')
const app = express()

// statement to middleware
app.use((req, res, next) => {
    // 检测请求头中的referer是否是127.0.0.1
    let referer = req.get('referer')
    if (referer && referer.indexOf('127.0.0.1') === -1) {
        return res.status(403).send('<h1>Forbidden</h1>')
    }
    next()
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})