var express = require('express');
var router = express.Router();

const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/portrait', (req, res) => {
    res.render('portrait')
})

router.post('/portrait', (req, res) => {
    // 创建 form 对象
    const form = new formidable.IncomingForm({
        multiples: true,
        // 设置上传目录
        uploadDir: __dirname + '/../public/images',
        // 保持文件后缀
        keepExtensions: true
    });
    // 解析请求报文
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            return res.redirect('/portrait');
        }
        console.log(fields);
        console.log(files);
        // 保存图片的访问 URL
        let url = '/images/' + files.portrait[0].newFilename;
        res.send(url);
    })
})

module.exports = router;
