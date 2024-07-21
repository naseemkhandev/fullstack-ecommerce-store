import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import { config } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Server is running...</h1>");
});

app.use("/api/v1/auth", authRoutes);

export default app;
