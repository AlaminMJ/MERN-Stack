import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
const jwt = {};

jwt.sing = (payload, secret = JWT_SECRET) => {
  return sign(payload, secret);
};

jwt.verify = (token, secret) => {
  return verify(token, secret);
};

export default jwt;
