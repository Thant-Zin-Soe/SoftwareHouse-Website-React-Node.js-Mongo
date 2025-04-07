// ✅ admin-panel/src/components/AdminLayout.js
import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
};

export default AdminLayout;
