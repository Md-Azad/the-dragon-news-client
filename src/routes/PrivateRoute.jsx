import React, { useContext, useState } from "react";
import { AuthCon } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthCon);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
