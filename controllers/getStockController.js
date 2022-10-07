const getStockModel = require('../models/getStockModel');

/**
 * 저장되어 있는 모든 주식 정보를 가져온다.
 * @param {object} req client의 request 정보를 갖는 객체
 * @param {object} res 전송할 response에 대해 다루는 객체
 * @param {object} next 다음에 실행할 미들웨어
 */
exports.getStocks = (req, res, next) => {
    getStockModel.getList((rows) => {
        console.log(`return data #: ${rows.length}`);
        
        res.json(rows);
    });
}
/**
 * 특정 주식의 정보를 가져온다.
 * @param {object} req client의 request 정보를 갖는 객체
 * @param {object} res 전송할 response에 대해 다루는 객체
 * @param {object} next 다음에 실행할 미들웨어
 */
exports.getOneStock = (req, res, nexxt) => {
    const stockCode = req.params.code;

    getStockModel.getOneStock(stockCode, (row) => {
        res.json(row);
    });
}