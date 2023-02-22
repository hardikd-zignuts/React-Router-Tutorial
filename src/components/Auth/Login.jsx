import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.Login(name);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      Username :{" "}
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
