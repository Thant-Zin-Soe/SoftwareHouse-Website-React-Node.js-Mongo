import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <div style={{ paddingTop: "60px" }}>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
