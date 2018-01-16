require('dotenv').config();

//express
const express = require('express');
const app = express();

//前置中间件
const Before = require('./app/middleware/Before.js');
app.use(Before);

// for parsing application/json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//form-data
var upload = require('./app/middleware/Upload.js');
app.use(upload.single('avatar')); //req.file
// app.use(upload.array('avatar')); //req.files
// app.use(upload.fields([{name:'avatar'}])); //req.files


//静态资源：http://localhost:3000/uploads/xxx.png
app.use(express.static('static'));

//路由
app.get('/', function(req, res){
    console.log(req.params); //:userId
    console.log(req.body); //post/put
    console.log(req.query); //?id=1
    console.log(req.file);
    console.log(req.files);
    res.send('hello world')
});
app.post('/upload', function (req, res) {
    console.log(req.file);
});

var {GetUsers} = require('./app/controller/User.js');
app.get('/users', GetUsers);


//后置中间件 ： handleErr、
const After = require('./app/middleware/After.js');
app.use(After);


module.exports = app;
