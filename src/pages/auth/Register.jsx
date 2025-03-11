import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/api/auth/register", { name, email, password });



      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-container-register" id="auth-container-register">
      <h2>Register</h2>
      {error && <p className="auth-error-message" id="auth-register-error">{error}</p>}
      <form onSubmit={handleRegister} className="auth-form-register" id="auth-form-register">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="auth-input" id="auth-name" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="auth-input" id="auth-email" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="auth-input" id="auth-password" />
        <button type="submit" className="auth-button" id="auth-register-button">Register</button>
      </form>
      <div className="auth-links-container" id="auth-links-container">
        <p>
          Already have an account? <span onClick={() => navigate("/login")} className="auth-link" id="auth-login-link">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;