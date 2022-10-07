const { Router } = require('express');
const router = Router();

// import middlewares for CRUD
const getStockController = require('../controllers/getStockController');
const newStockController = require('../controllers/newStockController');
const deleteStockController = require('../controllers/deleteStockController');
const updateStockController = require('../controllers/updateStockController');

router.get('/', getStockController.getStocks);
router.get('/:code', getStockController.getOneStock);

router.post('/', newStockController.addNewStock);

router.delete('/:code', deleteStockController.deleteStock);

router.put('/:code', updateStockController.updateStock);

module.exports = router;