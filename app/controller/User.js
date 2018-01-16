const Query = require('../services/Mysql.js');


const GetUsers = async(req, res, next) => {
    try{
        let result = await Query('SELECT * FROM users');
        res.send(JSON.stringify(result));
    }catch(e){
        next(e)
    }
};


module.exports = {
    GetUsers,
};
