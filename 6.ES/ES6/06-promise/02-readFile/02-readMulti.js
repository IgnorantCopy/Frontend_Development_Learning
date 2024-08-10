const fs = require('fs');

const promise = new Promise((resolve, reject) => {
    fs.readFile('./abc.md', 'utf8', (err, data) => {
        resolve(data);
    })
});

promise.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./def.md', 'utf8', (err, data) => {
            resolve([value, data]);
        })
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./ghi.md', 'utf8', (err, data) => {
            value.push(data);
            resolve(value);
        })
    });
}).then(value => {
    console.log(value.join('\n'));
})