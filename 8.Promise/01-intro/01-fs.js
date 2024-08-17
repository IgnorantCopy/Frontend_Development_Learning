function readFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

readFile('../resources/content.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});