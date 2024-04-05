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

    BookModel.deleteOne({_id: '660f682286e969b7541a89d8'}).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

    BookModel.deleteMany({is_hot: false}).then(data => {
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