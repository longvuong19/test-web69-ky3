import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const getLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username: username });

    if (!userDoc) return res.status(400).json({ message: "User not found!" });

    const token = jwt.sign({ id: userDoc.id }, "secret");
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
