import { ValidationError } from "joi";

const errorHandler = (error, _req, res, _next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";
  0;
  if (error instanceof ValidationError) {
    statusCode = 403;
    message = error.message;
  }

  return res.status(statusCode).json({ error: { message, statusCode } });
};

export default errorHandler;
