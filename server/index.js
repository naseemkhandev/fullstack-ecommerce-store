import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import colors from "colors";
import helmet from "helmet";
import { v2 as cloudinary } from "cloudinary";

import { config } from "./config/config.js";
import connectToDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

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
app.use(helmet());
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-site", policy: "cross-origin" },
  })
);

// Cloudinary configuration
cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Server is running...</h1>");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);

// Error handler
app.use(errorHandler);

app.listen(config.port, () => {
  connectToDB();
  console.log(`Server is running on port ${config.port}`.bgMagenta);
});

export default app;
