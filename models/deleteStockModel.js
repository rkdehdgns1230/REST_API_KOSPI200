const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1717',
    database: 'test'
});
/**
 * 특정 주식 종목 하나를 제거하는 함수
 * @param {list} data 종목코드를 담는 배열, 삭제할 종목의 정보
 * @param {function} cb controller에서 수행할 callback function
 */
exports.deleteStock = (data, cb) => {
    const sql = 'delete from 기업정보 where 종목코드=?';

    connection.query(sql, data, (err, rows) => {
        if(err)
            console.log(err);
        
        if(rows.affectedRows > 0){
            // 삭제에 성공함
            const deleteId = data[0];
            cb(deleteId);
        }
        else{
            // 삭제 실패
            cb(-1);
        }
    })
}