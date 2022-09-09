import morgan from "morgan";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import useragent from "express-useragent";

const middleware = [
  express.json(),
  cors(),
  morgan("dev"),
  helmet(),
  useragent.express(),
];
export default middleware;
