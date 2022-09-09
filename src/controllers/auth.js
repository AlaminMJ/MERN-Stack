import Joi from "joi";
import createError from "../errors/error";
import bcrypt from "../services/bcrypt";
import jwt from "../services/jwt";
import { User } from "../models";
import { restart } from "nodemon";

const auth = {};
auth.register = async (req, res, next) => {
  const { name, password, email, confirm_password } = req.body;
  // validate data
  const schema = Joi.object({
    name: Joi.string().required().error(createError("name")),
    email: Joi.string().required("email is required"),
    password: Joi.string()
      .required()
      .min(8)
      .error(createError("password must be 8 cart")),
    confirm_password: Joi.ref("password"),
  });
  const { error } = schema.validate({
    name,
    email,
    password,
    confirm_password,
  });
  if (error) {
    return next(error);
  }

  // save to database adn response
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      return next(createError("User already exist"));
    }
    const hashPassword = await bcrypt.hash(password);
    const user = new User({ name, email, password: hashPassword });
    const newuser = await user.save();

    const token = jwt.sing({
      name: newuser.name,
      email: newuser.email,
      _id: newuser._id,
    });
    return res.status(201).json({ user: newuser, token });
  } catch (error) {
    return next(error);
  }
};

export default auth;
