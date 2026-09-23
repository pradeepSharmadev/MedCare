// import "dotenv/config";
// console.log(process.env.PORT)

import express from "express";
import dotenv from "dotenv";
import app from "./app.js";

// dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT);
});

app.get("/api/health", (_, res) => {
  res.status(200).json("Everything is Fine ;-)");
});

app.get("/",(_, res)=>{
    res.send("Server side of MedCare!")
})