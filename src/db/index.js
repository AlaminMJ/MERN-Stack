import mongoose from "mongoose";
import { DB_URL } from "../config";
const connectDB = async (url = DB_URL, opt = {}) => {
  opt.dbName = "MERN";

  try {
    const db = await mongoose.connect(url, opt);
    console.log("Database connection successfully");
  } catch (error) {
    console.log("database connetiong fail");
  }
};
export default connectDB;
