import express from "express";
import {
  getLowProducts,
  getOrdersWithDesc,
  getProducts,
} from "../controllers/Products.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/products", verifyToken, getProducts);
router.get("/low-products", verifyToken, getLowProducts);
router.get("/orders-desc", verifyToken, getOrdersWithDesc);

export default router;
