const updateStockModel = require('../models/updateStockModel');
/**
 * 기존 기업 정보를 수정하기 위해 사용하는 controller
 * @param {object} req request 객체
 * @param {object} res response 객체
 * @param {middleware} next 다음 미들웨어
 */
exports.updateStock = (req, res, next) => {
    const stockName = req.body.name;
    const stockCode = req.body.code;
    const stockNum = req.body.num;
    const stockInfo = req.body.info;

    const data = [stockName, stockNum, stockInfo, stockCode];

    updateStockModel.updateStock(data, (code) => {
        if(code >= 0){
            console.log("update stock information");
            res.send(`update stock info code: ${stockCode}`);
        }
        else{
            console.log(`Error occur in update process code: ${stockCode}`);
            res.send(`Error occur in update process code: ${stockCode}`);
        }
    });
}