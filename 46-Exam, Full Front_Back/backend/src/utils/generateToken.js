import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const generateToken = (id, res) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "2m",
  });

  res.cookie("token", token);

  return token;
};
