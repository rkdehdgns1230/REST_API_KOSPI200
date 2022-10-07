const deleteStockModel = require('../models/deleteStockModel');
/**
 * 기업 정보를 삭제하기 위해 사용하는 controller
 * @param {object} req request 객체
 * @param {object} res response 객체
 * @param {middleware} next 다음에 실행할 middleware
 */
exports.deleteStock = (req, res, next) => {
    const stockCode = req.params.code;
    const data = [stockCode];

    deleteStockModel.deleteStock(data, (code) => {
        if(code >= 0){
            console.log(`delete stock info code: ${stockCode}`);
            res.send(`delete stock info code: ${stockCode}`);
        }
        else{
            console.log(`Error occur in delete process code: ${stockCode}`);
            res.send(`Error occur in delete process code: ${stockCode}`);
        }
    });
}
