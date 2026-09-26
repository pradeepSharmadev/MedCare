// import "dotenv/config";
// console.log(process.env.PORT)

import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
import mongoose from "mongoose";

// dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server side of MedCare!");
});

app.get("/api/health", async (_, res) => {
  const healthStatus = {
    status: "UP",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    checks: {
      mongodbAtlas: "DOWN",
    },
  };

  try {
    // mongoose.connection.readyState returns: 0=disconnected, 1=connected, 2=connecting
    const dbState = mongoose.connection.readyState;

    if (dbState === 1) {
      healthStatus.checks.mongodbAtlas = "UP";
      return res.status(200).json(healthStatus);
    }

    if (dbState === 2) {
      healthStatus.checks.mongodbAtlas = "CONNECTING";
      throw new Error("Database is establishing a connection.");
    }

    throw new Error("Database is disconnected.");
  } catch (error) {
    healthStatus.status = "DOWN";
    healthStatus.error = error.message;
    return res.status(503).json(healthStatus);
  }
});


// // Database connection
connectDB()
  .then(() => {
    //Error Handler while Starting server
    app.on("error", (err) => {
      console.error("Error starting server:", err);
      throw err;
    });
    //Listen to the server
    app.listen(PORT, () => {
      console.log("Server is running on Port " + PORT);
    });
  })
  .catch((err) => {
    console.error("Database MongoDB Connection Fail!!:", err);
  });