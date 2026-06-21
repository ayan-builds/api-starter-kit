// src/app.js

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env.js";

// Versioned routes
import v1Routes from "./api/v1/routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { ApiResponse } from "./utils/ApiResponse.js";
// import v2Routes from "./api/v2/routes/index.js";

// Global middlewares
// import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// ===============================
// GLOBAL MIDDLEWARES
// ===============================

// Security headers
app.use(helmet());

// CORS
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

// Logging
if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// HEALTH CHECK
// ===============================
app.get("/health", (req, res) => {

  res.status(200).json(new ApiResponse({
      message: "Server is running 🚀",
      data: user,
    }));
   

  // res.status(200).json({
  //   status: "OK",
  //   message: "Server is running 🚀",
  // });
});

// ===============================
// API ROUTES (VERSIONED)
// ===============================
app.use("/api/v1", v1Routes);
// app.use("/api/v2", v2Routes);

// ===============================
// 404 HANDLER
// ===============================
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// ===============================
// GLOBAL ERROR HANDLER
// ===============================
app.use(errorHandler);

// ===============================
export default app;
