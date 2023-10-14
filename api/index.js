import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();

mongoose
  .connect(
    "mongodb+srv://parishk1024:GankoGotNoChill@mern-auth.ye9s3uc.mongodb.net/MERN-AUTH?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});
