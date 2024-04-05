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

    BookModel.findOne({name: "three body"}).then(book => {
        console.log(book)
    }).catch(err => {
        console.log(err)
    })

    // 根据 Id 获取文档
    BookModel.findById('660f6e5736f8388d74fb7a9a').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

    // 批量获取
    BookModel.find({author: "刘慈欣"}).then(data => {
        console.log(data)
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