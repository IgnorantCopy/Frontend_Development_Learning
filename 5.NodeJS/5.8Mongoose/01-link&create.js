const mongoose = require('mongoose')

// 连接 mongdb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 设置回调
// 连接成功的回调
mongoose.connection.once('open', () => {
    // 创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,  // 表明该字段必填
            unique: true  // 主键
        },
        author: {
            type: String,
            default: "无名"   // 默认值
        },
        gender: {
            type: String,
            enum: ['M', 'F']
        },
        price: Number,
        is_hot: Boolean,
        tags: Array,
        publish_date: Date
        /*
         * 其他字段：
         *  > Buffer: 二进制数据
         *  > ObjectId: 唯一标识符(需要使用mongoose.Schema.Types.ObjectId指定)
         *  > Mixed: 不同数据类型混合(需要使用mongoose.Schema.Types.Mixed指定)
         *  > Decimal128: 高精度数字(需要使用mongoose.Schema.Types.Decimal128指定)
         */
    })
    // 创建模型对象
    let BookModel = mongoose.model('Book', BookSchema)
    // 新增数据
    BookModel.create({
        name: 'three body',
        author: '刘慈欣',
        price: 99.99,
        is_hot: true,
        tags: ['科幻', '冒险'],
        publish_date: new Date()
    }).then(book => {
        console.log(book)
    }).catch((err) => {
        console.log('新增数据失败', err)
    })
})
// 连接异常的回调
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ', err)
})
// 连接断开的回调
mongoose.connection.on('close', () => {
    console.log('Mongoose default connection is disconnected')
})

// 关闭 mongoose 连接
setTimeout(() => {
    mongoose.disconnect()
}, 2000)


