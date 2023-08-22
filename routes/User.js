import express from "express";
import { getLogin } from "../controllers/User.js";

const router = express.Router();

router.post("/login", getLogin);

export default router;
