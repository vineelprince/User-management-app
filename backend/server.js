import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cors from "cors";

import { UserApp } from "./APIs/UserAPI.js";

// Load env variables
config();

const app = exp();

// PORT
const PORT = process.env.PORT || 4000;

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",

  // Your Vercel frontend URL
  //"https://user-management-app-deploy.vercel.app",
];

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {

      // allow requests with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Not Allowed"));
      }
    },

    credentials: true,
  })
);

// Middleware
app.use(exp.json());

// Routes
app.use("/user-api", UserApp);

// Database connection
const connectDB = async () => {
  try {

    await connect(process.env.DB_URL);

    console.log("DATABASE Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log("Error while DATABASE connection:", err);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.errors,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate key error",
      errors: err.keyValue,
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
});