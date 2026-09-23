import express from "express";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

// Middleware specific to this router
router.use((req, _, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
});

router.route("/login").post(login);

export default router;
