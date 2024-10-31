import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runing at port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error:", error);
      throw err;
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//       console.log("Error:", error);
//       throw err
//   }
// })();
