import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ user }) => {
  if (user) {
    return <Navigate to={`/dash/${user?.role}`} replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;
