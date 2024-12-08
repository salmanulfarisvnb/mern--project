import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`mongoDb connected:${conn.connection.host}`);
  } catch (error) {
    console.error(`error massage : ${error}`);
    process.exit(1); //process 1 code means exit with failure,0 means success
  }
};
