

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Auth from "./pages/Auth";
// import ResetPassword from "./pages/ResetPassword";

// function App() {
//   return (
//     <div className="admin-container">
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import ManageBlogs from "./pages/ManageBlogs";
import ManageComments from "./pages/ManageComments";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <div className="admin-container">
      <Routes>
        {/* No Navbar */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* With Navbar */}
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/manage-blogs" element={<AdminLayout><ManageBlogs /></AdminLayout>} />
        <Route path="/manage-comments" element={<AdminLayout><ManageComments /></AdminLayout>} />
      </Routes>
    </div>
  );
}

export default App;
