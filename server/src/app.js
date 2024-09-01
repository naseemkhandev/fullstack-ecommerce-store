import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import colors from "colors";
import helmet from "helmet";
import { v2 as cloudinary } from "cloudinary";
import bodyParser from "body-parser";

import { config } from "./config/config.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: config.clientUrl,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
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

export default app;
