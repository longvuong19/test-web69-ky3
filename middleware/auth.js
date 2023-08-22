import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const verified = jwt.verify(token, "secret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
