/* eslint-env node */
import dotenv from "dotenv";
dotenv.config();

export const PORT = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};