const fs = require('fs');

function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./files/abc.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./files/def.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function read3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./files/ghi.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

async function main() {
    let result1 = await read1();
    let result2 = await read2();
    let result3 = await read3();
    console.log(result1.toString());
    console.log(result2.toString());
    console.log(result3.toString());
}

main();