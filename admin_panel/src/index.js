// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import Auth from "./pages/Auth";
//   // ✅ Import Auth page for login & forgot password
// import Dashboard from "./pages/Dashboard";  // ✅ Import Admin Dashboard
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/auth" element={<Auth />} /> {/* ✅ Admin Login & Forgot Password */}
//         <Route path="/admin/dashboard" element={<Dashboard />} /> {/* ✅ Admin Dashboard */}
//         <Route path="/*" element={<App />} /> {/* ✅ Default Route */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

// // Measure performance
// reportWebVitals();


//----------------------

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App /> {/* ✅ Now App.js handles the routing */}
//   </React.StrictMode>
// );

// // Measure performance
// reportWebVitals();

//------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Dashboard from "./pages/Dashboard";  // ✅ Make sure this file exists
// import Auth from "./pages/Auth";  // ✅ Login Page

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<Auth />} /> {/* Redirect to Auth by default */}
//         <Route path="/reset-password" element={<ResetPassword />} />

//       </Routes>
//     </Router>
//   </React.StrictMode>
// );


//---------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import Auth from "./pages/Auth"; // ✅ Admin Login & Forgot Password
// import Dashboard from "./pages/Dashboard"; // ✅ Admin Dashboard
// import ResetPassword from "./pages/ResetPassword"; // ✅ Import Reset Password Page
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/auth" element={<Auth />} /> {/* ✅ Admin Login & Forgot Password */}
//         <Route path="/admin/dashboard" element={<Dashboard />} /> {/* ✅ Admin Dashboard */}
//         <Route path="/reset-password" element={<ResetPassword />} /> {/* ✅ Fix Route */}
//         <Route path="/*" element={<App />} /> {/* ✅ Default Route */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

// // Measure performance
// reportWebVitals();

//--------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router> {/* ✅ Only one Router here */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
