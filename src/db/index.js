import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  ///console.log(`Connection Name${process.env.MANGODB_URI}`)
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MANGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connecttion error", error);
    process.exit(1);
  }
};

export default connectDB;
