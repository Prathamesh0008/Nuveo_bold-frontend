// src/admin/AdminApp.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdminNavbar from "./components/AdminNavbar";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import AdminRoutes from "./AdminRoutes";
import "./admin.css";

function AdminApp() {
  return (
    <Router>
      <div className="admin-container">
        <Sidebar />
        <div className="admin-main">
          <AdminNavbar />
          <Routes>
            <Route element={<AdminRoutes />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/manage-products" element={<ManageProducts />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AdminApp;
