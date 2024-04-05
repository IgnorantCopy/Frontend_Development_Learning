const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', () => {
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,
    })

    let BookModel = mongoose.model('Book', BookSchema)

    // 字段筛选
    BookModel.find().select({_id: 0, name: 1, author: 1}).then(books => {
        console.log(books)
    }).catch(err => {
        console.log(err)
    })

    // 数据排序
    // 1 表示升序，-1 表示降序
    BookModel.find().sort({price: -1}).then(books => {
        console.log(books)
    }).catch(err => {
        console.log(err)
    })

    // 数据截断
    // skip(n) 跳过 n 个数据，limit(n) 限制返回的结果数量
    BookModel.find()
        .select({_id: 0, name: 1, author: 1})
        .sort({price: -1})
        .skip(1)
        .limit(2)
        .then(books => {
            console.log(books)
        }).catch(err => {
        console.log(err)
    })

})

mongoose.connection.on('error', err => {
    console.log(err)
})

mongoose.connection.on('close', () => {
    console.log('Mongoose connection is closed')
})