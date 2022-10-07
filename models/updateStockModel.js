const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1717',
    database: 'test'
});
/**
 * 기존 기업 정보를 수정하는 함수
 * @param {list} data [기업이름, 주식 수, 기업 개요, 종목코드]
 * @param {Function} cb callback 함수
 */
exports.updateStock = (data, cb) => {
    const sql = 'update 기업정보 set 기업이름=?, 상장주식수=?, 기업개요=? where 종목코드=?';

    connection.query(sql, data, (err, rows, fields) => {
        if(err)
            console.log(err);

        if(rows.affectedRows > 0){
            console.log(`update code: ${data[0]}`);
            cb(data[3]);
        }
        else{
            cb(-1);
        }
    })
}