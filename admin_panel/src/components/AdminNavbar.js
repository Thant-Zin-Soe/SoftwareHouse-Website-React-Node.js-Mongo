import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import { FaTachometerAlt, FaBlog, FaComments, FaCogs, FaSignOutAlt } from "react-icons/fa";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/auth");
  };

  return (
    <nav className="admin-navbar">
      <div className="logo">AI Solutions Admin Panel</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" activeclassname="active">
            <FaTachometerAlt style={{ marginRight: "6px" }} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-blogs" activeclassname="active">
            <FaBlog style={{ marginRight: "6px" }} />
            Manage Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-comments" activeclassname="active">
            <FaComments style={{ marginRight: "6px" }} />
            Manage Comments
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-content" activeclassname="active">
            <FaCogs style={{ marginRight: "6px" }} />
            Manage Content
          </NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: "6px" }} />
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
