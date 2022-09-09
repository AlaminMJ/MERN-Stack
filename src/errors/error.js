import error from "http-errors";
const createError = (message) => error(message);
export default createError;
