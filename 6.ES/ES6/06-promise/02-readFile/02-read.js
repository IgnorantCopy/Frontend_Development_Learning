const fs = require('fs')

// use promise to read file
const promise = new Promise((resolve, reject) => {
    fs.readFile('./abc.md', (err, data) => {
        if (err) throw reject(err)
        resolve(data)
    })
})

promise.then(function (value) {
    console.log(value.toString())
}, function (error) {
    console.error(error)
})