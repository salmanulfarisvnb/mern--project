import express from "express";
const router = express.Router();
import {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProducts);

export default router;
