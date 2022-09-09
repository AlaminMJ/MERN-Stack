import morgan from "morgan";
import express from "express";
import cors from "cors";

const middleware = [express.json(), cors(), morgan("dev")];
export default middleware;
