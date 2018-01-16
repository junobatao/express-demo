//上传文件 - 格式处理

var multer = require('multer');
var md5 = require('md5');


var storage = multer.diskStorage({
    destination: 'static/uploads/',
    filename: function (req, file, cb) {
        var now = Date.now();
        var fileFormat =(file.originalname).split(".");
        cb(null, md5(file) + '-' + now + "." + fileFormat[fileFormat.length - 1]);
    }
})
var upload = multer({ storage: storage })

module.exports = upload;
