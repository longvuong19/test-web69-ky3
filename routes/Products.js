import express from "express";
import {
  getLowProducts,
  getOrdersWithDesc,
  getProducts,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/low-products", getLowProducts);
router.get("/orders-desc", getOrdersWithDesc);

export default router;
