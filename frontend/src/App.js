

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Events from "./pages/Events";
// import Feedback from "./pages/ContactUs";
// import CustomNavbar from "./components/Navbar"; // ✅ Ensure this import
// import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactUs from "./pages/ContactUs";

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
//           <Route path="/contactus" element={<ContactUs />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs"; // ✅ Updated import
import Services from "./pages/Services";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} /> {/* ✅ Updated path */}
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
