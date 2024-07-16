import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

export default app;
