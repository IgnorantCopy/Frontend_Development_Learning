defining a function to read a file using promises

function readFile(filePath) {
return new Promise((resolve, reject) => {
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
reject(err);
} else {
resolve(data);
}
});
});
}