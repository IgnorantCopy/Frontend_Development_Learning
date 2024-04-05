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

    /*
     * 运算符:
     *  $gt > (greater than)
     *  $lt < (less than)
     *  $gte >= (greater than or equal to)
     *  $lte <= (less than or equal to)
     *  $ne != (not equal)
     *  $in 包含
     *  $nin 不包含
     *  $all 全部包含
     */
    // 查询价格小于100的图书
    BookModel.find({price: {$lt: 100}}).then(books => {
        console.log('method1')
        console.log(books)
    }).catch(err => {
        console.log(err)
    })

    /*
     * 逻辑运算:
     *  $or 或
     *  $and 与
     *  $not 非
     */
    // 查询价格大于50或小于10的图书
    BookModel.find({$or: [{price: {$gt: 50}}, {price: {$lt: 10}}]}).then(books => {
        console.log('method2')
        console.log(books)
    }).catch(err => {
        console.log(err)
    })

    // 正则表达式查询
    BookModel.find({name: /three/}).then(books => {
        console.log('method3')
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