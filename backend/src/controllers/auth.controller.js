import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required", [
      {
        field: "email",
        message: "Please enter your email",
      },
    ]);
  }

  if (!password) {
    throw new ApiError(400, "Password is required", [
      {
        field: "password",
        message: "Please enter your password",
      },
    ]);
  }


  console.log(email, password, "From Login Controller");

  return res.status(201).json(new ApiResponse(201, {name:"Pradeep", id:"123", role:"admin"}, "Logged In Success"))
});

export {
    login
}