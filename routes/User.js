import express from "express";
import { getLogin } from "../controllers/User.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", verifyToken, getLogin);

export default router;
