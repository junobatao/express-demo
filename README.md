### 路由  
### 中间件  

### 文件上传：  
multer : https://github.com/expressjs/multer  
var upload = multer({ dest: 'uploads/' })  
multer.diskStorage({....});  
upload.single('avatar');  
upload.array('avatar');  
upload.fields([{name: 'avatar'}, {name: 'avatar2'}]);  

req.file  
req.files  


### 数据库：  
env : https://github.com/motdotla/dotenv  
db-migrate : https://github.com/db-migrate/node-db-migrate  
driver : https://github.com/db-migrate/mysql  
mysql : https://github.com/mysqljs/mysql  


### 单元测试：  
测试框架：http://mochajs.org/  
模拟HTTP ： https://github.com/visionmedia/supertest  
