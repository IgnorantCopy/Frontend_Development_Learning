const jwt = require('jsonwebtoken')

// 创建token
let token = jwt.sign({
    name: 'admin',
    age: 25
}, 'secret', {
    expiresIn: 60   // 过期时间，单位：秒
})

console.log(token)

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJhZ2UiOjI1LCJpYXQiOjE3MTIzNzMzNTAsImV4cCI6MTcxMjM3MzQxMH0.B2asELt0vtJY8lwmdeFlOnF0MKuWA_IhlWjqPPl_R3k'
// 验证token
jwt.verify(t, 'secret', (err, decoded) => {
    if (err) {
        console.log('token验证失败')
        console.log(err)
    } else {
        console.log(decoded)
    }
})

