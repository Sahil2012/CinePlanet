import express, { Application } from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

export default app;
