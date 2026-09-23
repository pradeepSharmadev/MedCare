import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Known application error
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
      data: err.data,
      ...(process.env.NODE_ENV !== "production" && {
        stack: err.stack,
      }),
    });
  }

  // Unknown/unexpected error
  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message || "Something went wrong on server",
    errors: [],
    data: null,
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
    }),
  });
};

export default errorHandler;
