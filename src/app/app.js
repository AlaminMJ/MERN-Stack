import express from "express";
import { DB_URL } from "../config";
import connectDB from "../db";
import errorHandler from "../middlewares/errorHandler";
import router from "../routes";
import middleware from "./middleware";

// application
const app = express();
// middleware
app.use(middleware);
app.use("/api", router);
// connect db

connectDB(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error handler
app.use(errorHandler);

export default app;
