import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGO_URI,
  clientUrl: process.env.CLIENT_URL,
};

export const config = Object.freeze(_config);
