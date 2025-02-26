// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Events from "./pages/Events";
// import Feedback from "./pages/Feedback";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AdminAuth from "./pages/AdminAuth"; // Remove Login import

// // If Auth.js includes login


//  // ✅ Combined login, register & forgot password in one file

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/feedback" element={<Feedback />} />
          
//           {/* ✅ Admin Authentication (Login + Forgot Password in One Page) */}
//           <Route path="/auth/login" element={<Login />} />
          
//           {/* ❌ Handle Invalid Routes (404 Redirect) */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
//-----------------------------------

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Events from "./pages/Events";
// import Feedback from "./pages/Feedback";
// import CustomNavbar from "./components/Navbar"; // ✅ Ensure this import
// import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <CustomNavbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/feedback" element={<Feedback />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

//________________________________________


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Feedback from "./pages/ContactUs";
import CustomNavbar from "./components/Navbar"; // ✅ Ensure this import
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
