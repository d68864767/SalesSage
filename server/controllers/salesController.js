// server/controllers/salesController.js

const SalesModel = require('../models/salesModel');

// Get all sales
exports.getAllSales = async (req, res) => {
  try {
    const sales = await SalesModel.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get sale by ID
exports.getSaleById = async (req, res) => {
  try {
    const sale = await SalesModel.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new sale
exports.createSale = async (req, res) => {
  try {
    const { product, date, amount } = req.body;
    const newSale = new SalesModel({ product, date, amount });
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a sale
exports.updateSale = async (req, res) => {
  try {
    const { product, date, amount } = req.body;
    const updatedSale = await SalesModel.findByIdAndUpdate(
      req.params.id,
      { product, date, amount },
      { new: true }
    );
    if (!updatedSale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a sale
exports.deleteSale = async (req, res) => {
  try {
    const deletedSale = await SalesModel.findByIdAndDelete(req.params.id);
    if (!deletedSale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
