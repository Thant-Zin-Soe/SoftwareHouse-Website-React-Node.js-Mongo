// ✅ admin-panel/src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import ManageBlogs from "./pages/ManageBlogs";
import ManageComments from "./pages/ManageComments";
import ManageContent from "./pages/ManageContent";
import ContactMessages from "./pages/ContactMessages"; // ✅ NEW page import
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <div className="admin-container">
      <Routes>
        {/* Public routes (no navbar) */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Admin routes (with navbar layout) */}
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/manage-blogs" element={<AdminLayout><ManageBlogs /></AdminLayout>} />
        <Route path="/manage-comments" element={<AdminLayout><ManageComments /></AdminLayout>} />
        <Route path="/manage-content" element={<AdminLayout><ManageContent /></AdminLayout>} />
        <Route path="/contact-messages" element={<AdminLayout><ContactMessages /></AdminLayout>} /> {/* ✅ NEW route */}
      </Routes>
    </div>
  );
}

export default App;
