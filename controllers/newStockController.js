const newStockModel = require('../models/newStockModel');
/**
 * 새로운 기업 정보를 생성하기 위해 사용하는 controller
 * @param {object} req request 객체
 * @param {object} res response 객체
 * @param {middleware} next 다음 미들웨어
 */
exports.addNewStock = (req, res, next) => {
    const stockName = req.body.name;
    const stockCode = req.body.code;
    const stockNum = req.body.num;
    const stockInfo = req.body.info;

    const data = [stockCode, stockName, stockNum, stockInfo];
    console.log(`input data ${req.body}`);

    newStockModel.createStock(data, (code) => {
        if(code >= 0){
            console.log("create new stock information");
            res.send(`create new stock info code: ${stockCode}`);
        }
        else{
            console.log(`Error occur in create process code: ${stockCode}`);
            res.send(`Error occur in create process code: ${stockCode}`);
        }
    });
}