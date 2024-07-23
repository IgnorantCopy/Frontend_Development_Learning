const express = require('express');
const app = express();

app.get('/server', (req, res) => {
    // 设置响应头，允许跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('HELLO AJAX GET')
})

app.post('/server', (req, res) => {
    // 设置响应头，允许跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('HELLO AJAX POST')
})

app.all('/server', (req, res) => {
    // 设置响应头，允许跨域请求
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send()
})

app.all('/json-server', (req, res) => {
    // 设置响应头，允许跨域请求
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 数据
    const data = {
        name: 'Ignorant'
    }
    // 进行字符串的转换
    let str = JSON.stringify(data);
    // 设置响应体
    res.send(str)
})

app.get('/ie', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('HELLO IE');
})

// 延时响应
app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('HELLO DELAY')
    }, 3000);
})

// jQuery 服务
app.all('/jquery-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Ignorant'
    }
    res.send(JSON.stringify(data));
})

// axios 服务
app.all('/axios-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Ignorant'
    }
    res.send(JSON.stringify(data));
})

// fetch 服务
app.all('/fetch-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Ignorant'
    }
    res.send(JSON.stringify(data));
})

// jsonp 服务
app.all('/check-username', (req, res) => {
    const data = {
        exist: true,
        msg: '用户名已经存在',
    }
    let str = JSON.stringify(data);
    res.send(`handle(${str})`);
})

app.all('/jquery-jsonp-server', (req, res) => {
    const data = {
        name: 'Ignorant',
        city: ['北京', '上海', '广州']
    }
    let str = JSON.stringify(data);
    let callback = req.query.callback;
    res.send(`${callback}(${str})`);
})

app.all('/cors-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.send('HELLO CORS');
})

app.listen(8000, () => {
    console.log('Server is running on port 8000...');
})