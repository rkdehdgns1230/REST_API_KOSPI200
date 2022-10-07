const mysql = require('mysql');
const db_info = require('../config.json');

const connection = mysql.createConnection({
    host: db_info.host,
    user: db_info.user,
    password: db_info.password,
    database: db_info.database
});

/**
 * 새로운 기업 정보를 DB에 추가하는 함수
 * @param {list} data [종목코드, 기업이름, 주식 수, 기업 개요]
 * @param {Function} cb callback 함수
 */
exports.createStock = (data, cb) => {
    const sql = 'insert into 기업정보 values(?, ?, ?, ?)';

    const sqlReal = connection.query(sql, data, (err, rows) => {
        if(err)
            console.log(err);

        // insert query가 정상적으로 적용되었는지 확인하기 위해서
        // affectedRows attribute를 사용한다.
        if(rows.affectedRows > 0){
            // 정상 처리됨
            const insertId = rows.insertId;
            console.log(insertId);
            cb(insertId);
        }
        else{
            // 문제 발생시 callback function에 -1을 인자로 넘겨줌
            cb(-1);
        }
    });
    // 실제로 수행된 SQL를 확인해보자.
    console.log(sqlReal.sql);
}