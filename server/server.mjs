import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnection from './config/db.mjs';
import logger from './utils/logger.js';
import errorHandler from './middleware/errorHandler.js';
import helmet from 'helmet';
import cors from 'cors';
import corsOptions from './config/corsOptions.mjs';
import authRoutes from './routes/auth-route.js';
import { RateLimiterRedis } from 'rate-limiter-flexible';

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(helmet());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request to ${req.url}`);
  logger.info(`Request body, ${req.body}`);
  next();
});

// Routes
app.use('/auth/', authRoutes);

app.listen(PORT, () => {
  logger.info(`Server is running on PORT ${PORT}`);
  console.log(`Server is running on PORT ${PORT}`);
});
