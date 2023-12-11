// server/routes/api.js

const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

// Routes for sales data
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleById);
router.post('/', salesController.createSale);
router.put('/:id', salesController.updateSale);
router.delete('/:id', salesController.deleteSale);

module.exports = router;
