import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const expiry = localStorage.getItem("expiryDate");
  const token = localStorage.getItem("token");
  const currentdate = new Date();
  useEffect(() => {
    if (token === null || (expiry && new Date(expiry) < currentdate)) {
      navigate("/login");
    }
  }, [expiry, token, navigate]);
  return (
    <div>
      <div className="">{children}</div>
    </div>
  );
};

export default ProtectedRoute;
