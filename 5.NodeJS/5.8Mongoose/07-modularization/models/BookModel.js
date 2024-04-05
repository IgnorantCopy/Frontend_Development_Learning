const mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        default: "无名",
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    publish_date: Date,
})

let BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel