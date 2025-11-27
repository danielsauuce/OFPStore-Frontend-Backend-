import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnection from './config/db.mjs';
import logger from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

logger.info('Server starting...');

app.use(express.json());

app.listen(PORT, () => {
  logger.info(`Server is running on PORT ${PORT}`);
  console.log(`Server is running on PORT ${PORT}`);
});
