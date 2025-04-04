import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear token
    navigate("/auth"); // Redirect to login page
  };

  return (
    <nav className="admin-navbar">
      <div className="logo">AI Solutions Admin Panel</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/manage-blogs" activeclassname="active">Manage Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/manage-comments" activeclassname="active">Manage Comments</NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
