import { genSalt, hash, compare } from "bcryptjs";
const bcrypt = {};
bcrypt.hash = async (str) => {
  const salt = await genSalt(10);
  const hashpass = await hash(str, salt);
  return hashpass;
};

bcrypt.compair = async (str, hash) => {
  const isMatch = await compare(str, hash);
  return isMatch;
};
export default bcrypt;
