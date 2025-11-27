import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnection from './config/db.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Found' : 'NOT FOUND');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
