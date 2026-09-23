import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
