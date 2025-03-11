import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", res.data);

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate("/"); // ✅ Redirect to Home
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="auth-container-login" id="auth-container-login">
      <h2>Login</h2>
      {error && <p className="auth-error-message" id="auth-error-message">{error}</p>}
      <form onSubmit={handleLogin} className="auth-form-login" id="auth-form-login">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="auth-input" id="auth-email" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="auth-input" id="auth-password" />
        <button type="submit" className="auth-button" id="auth-login-button">Login</button>
      </form>
      <div className="auth-links-container" id="auth-links-container">
        <p>
          New User? <span onClick={() => navigate("/register")} className="auth-link" id="auth-register-link">Register</span>
        </p>
        <p>
          <span onClick={() => navigate("/forgot-password")} className="auth-link" id="auth-forgot-password-link">Forgot Password?</span>
        </p>
      </div>
    </div>
  );
};

export default Login;