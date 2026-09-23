import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler.js";

import authRoutes from "./routers/auth.routes.js"
import { ApiError } from "./utils/ApiError.js";

const app = express();

// configure middlewares
app.set("trust proxy", 1); //examine it

// express rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // 100 req per IP in 15 minutes
  standardHeaders: true,
  message: "Too many requests, please try again later.",
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
});

app.use(limiter);

// cors origin config
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-refresh-token",
    "X-CSRF-Token",
    "x-access-token",
  ],
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// cookie-parser
app.use(cookieParser());

// Middleware to parse JSON bodies
// This is necessary for handling JSON requests limit is set to 16kb
app.use(
  express.json({
    limit: "16kb",
  }),
);

// Middleware to parse URL-encoded bodies
// This is necessary for handling form submissions limit is set to 16kb
app.use(
  express.urlencoded({
    //handle nested data
    extended: true,
    //limit 16kb
    limit: "16kb",
  }),
);

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// create routes
app.use("/api/v1/auth", authRoutes);

// 404 handler
app.use((req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
});

// Global error handler
app.use(errorHandler);

// export app
export default app;
