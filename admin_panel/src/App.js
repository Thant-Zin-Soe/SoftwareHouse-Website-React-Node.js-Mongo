
// import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//-----------------
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auth from "./pages/Auth"; // ✅ Admin Login & Forgot Password
// import Dashboard from "./pages/Dashboard"; // ✅ Admin Dashboard

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/admin/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


//----------------------------


import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="admin-container">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
