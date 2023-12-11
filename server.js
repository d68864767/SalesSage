const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const salesController = require('./server/controllers/salesController');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sales', salesController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
