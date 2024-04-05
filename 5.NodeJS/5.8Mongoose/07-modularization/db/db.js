/**
 *
 * @param success 数据库连接成功的回调函数
 * @param error 数据库连接失败的回调函数
 */
module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = () => {
            console.log('数据库连接失败')
        }
    }

    const mongoose = require('mongoose')
    const {DBHOST, DBPORT, DBNAME} = require('../config/config')

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        success()
    })

    mongoose.connection.on('error', () => {
        error()
    })

    mongoose.connection.on('close', () => {
        console.log('Mongoose default connection is disconnected')
    })
}