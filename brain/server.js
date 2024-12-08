import express from "express";
import { connectDb } from "./config/db.js";
import productRoute from "./routes/product.route.js";

const port = process.env.PORT | 6000;
const app = express();

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoute);

app.listen(port, () => {
  connectDb();
  console.log(`working port in ${port}`);
});
