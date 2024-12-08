import express from "express";
const router = express.Router();
import {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
} from "../controllers/product.controller.js";

router.get("/api/products", getProducts);
router.post("/api/products", postProducts);
router.put("/api/products/:id", putProducts);
router.delete("/api/products/:id", deleteProducts);

export default router;
