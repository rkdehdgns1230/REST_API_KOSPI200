const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1717',
    database: 'test'
});
/**
 * 전체 기업 정보를 불러오는 함수
 * @param {Function} cb 
 */
exports.getList = (cb) => {
    const sql = 'select * from 기업정보';

    connection.query(sql, (err, rows, fields) => {
        if(err)
            console.log(err);
        
        cb(JSON.stringify(rows));
    });
}
/**
 * 개별 기업 정보를 불러오는 함수
 * @param {int} code 
 * @param {Function} cb 
 */
exports.getOneStock = (code, cb) => {
    const sql = 'select * from 기업정보 where 종목코드=?';

    connection.query(sql, [code], (err, rows, fields) => {
        if(err)
            console.log(err);
        cb(rows);
    });
}