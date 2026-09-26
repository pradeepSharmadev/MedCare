import mongoose from "mongoose";
import { DB_NAME } from "../config/constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`,
    );
    console.log(
      `MongoDB Connected!! Database Host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB connection Error:", error);
    process.exit(1); // Exit process with failure Read more
  }
};

export default connectDB;
