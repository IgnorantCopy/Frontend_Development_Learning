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

    BookModel.updateOne({name: 'three body'}, {price: 99}).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    // 批量更新
    BookModel.updateMany({is_hot: false}, {false: true}).then(result => {
        console.log(result)
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