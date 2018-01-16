const mysql = require('mysql');

var connParam = {
    connectionLimit : 3,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
};
const pool = mysql.createPool(connParam);


const Query = async(strSql, arrValues=[]) => {
    return new Promise( (resolve, reject) => {
        pool.getConnection(function(err, connection){
            if(err){
                reject(err);
            }

            connection.query(strSql, arrValues, function (error, results, fields) {
                if(error){
                    connection.release();
                    reject(error);
                }else{
                    connection.release();
                    console.log(results);
                    resolve(results);
                }
            });
        });
    });
};


module.exports = Query;
