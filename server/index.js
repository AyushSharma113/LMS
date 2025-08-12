import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import connectDB from "./database/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config({});

connectDB();
const app = express();

// default middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/user", userRoute);

// USER_API = http://localhost:8000/api/v1/user;

// server starting
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
