// server/config.js

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  ml: {
    modelPath: './ml/models/salesModel.js',
    dataPath: './ml/data/salesData.csv',
  },
};
