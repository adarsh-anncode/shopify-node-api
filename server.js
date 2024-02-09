import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import customerRouter from "./src/routers/customer.router.js";

dotenv.config();

//express setup
const app = express();

//mongoose setup
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => {
  console.log("Connected to MongoDB");
});


//apply middlewares
app.use(cors());
app.use(express.json());

app.use("/customer", customerRouter);


//listen
app.listen(process.env.PORT || 5000, () => {
  console.log(`Access from - http://localhost:${process.env.PORT}`);
});