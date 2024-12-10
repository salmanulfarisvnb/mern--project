import express from "express";
import { connectDb } from "./config/db.js";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const port = process.env.PORT || 7000;
const app = express();

app.use(
  cors({
    origin: "https://mern-project-frontend-k14p.onrender.com", // Allow requests from your frontend origin
  })
);

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/", productRoute);

app.listen(port, () => {
  connectDb();
  console.log(`working port in ${port}`);
});
