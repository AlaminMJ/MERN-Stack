import express from "express";
import router from "../routes";
import middleware from "./middleware";

// application
const app = express();
// middleware
app.use(middleware);
app.use("/api", router);

export default app;
