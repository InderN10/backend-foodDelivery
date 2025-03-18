import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { usersRouter } from "./routes/users-route.js";
import { foodsRouter } from "./routes/food-route.js";
import { foodOrderRouter } from "./routes/food-order-route.js";

const app = express();
dotenv.config();
const port = 3000;

mongoose.connect(process.env.MONGO_CENECTION_STRING).then(() => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/users", usersRouter)
app.use("/foods", foodsRouter)
app.use("/orders", foodOrderRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
