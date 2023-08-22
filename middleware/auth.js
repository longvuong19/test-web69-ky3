// import jwt from "jsonwebtoken";

// const decodedToken = (token) => {
//   const verifiedToken = jwt.verify(token, "secret");
//   return verifiedToken;
// };

// export const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   console.log(token);
//   if (!token) return res.status(403).send("Access denied!");
//   const getToken = token.split(" ")[1];
//   const verify = decodedToken(getToken);
//   if (!verify) throw new Error("Failed to verify!");
//   next();
// };

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) return res.status(403).send("Access denied!");

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    console.log(token);

    const verified = jwt.verify(token, "secret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
