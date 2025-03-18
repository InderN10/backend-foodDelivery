import { Users } from "../../models/user.schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (user && user.password === password) {
      const token = jwt.sign({ email: user.email }, SECRET_KEY);
      res.json({ message: "login success", token: token });
    } else {
      res.json({ message: "login failed" });
    }
  } catch (err) {
    console.log(err);
  }
};
