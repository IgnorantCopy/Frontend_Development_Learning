const mongoose = require("mongoose")
const db = require('./db/db')
const BookModel = require('./models/BookModel')

db(() => {
    BookModel.create({
        name: 'three body',
        author: '刘慈欣',
        price: 99.99,
        is_hot: true,
        tags: ['科幻', '冒险'],
        publish_date: new Date(),
    }).then(book => {
        console.log(book)
    }).catch((err) => {
        console.log('新增数据失败', err)
    })
})

