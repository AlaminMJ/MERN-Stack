import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true, trim: true },
    roll: { type: [String], required: true, trim: true, default: ["user"] },
    isVerify: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const User = model("user", userSchema);
export default User;
