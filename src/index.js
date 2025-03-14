import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";  // ✅ Make sure Router is here
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>  {/* ✅ Wrap App with Router */}
    <App />
  </Router>
);
