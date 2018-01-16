//后置中间件
const After = (err,req,res,next) => {
    res.json({'code':500, 'msg': err.message});
};


module.exports = After;
