// server/models/salesModel.js

const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const SalesModel = mongoose.model('Sales', salesSchema);

module.exports = SalesModel;
