// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Ensure this file exists

// const CustomNavbar = () => {
//   return (
//     <Navbar expand="lg" className="custom-navbar">
//       <Container>
//         {/* ✅ Logo */}
//         <Navbar.Brand as={Link} to="/" className="logo">
//           AI Solutions
//         </Navbar.Brand>

//         {/* ✅ Mobile Menu Toggle */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* ✅ Navbar Items */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
//             <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
//             <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
//             <Nav.Link as={Link} to="/feedback" className="nav-link-custom">Feedback</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;



import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faCogs, faCalendar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css"; // ✅ Ensure this CSS file exists

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* ✅ Logo with Animation */}
        <Navbar.Brand as={Link} to="/" className="logo">
           AI Solutions
        </Navbar.Brand>

        {/* ✅ Mobile Menu Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* ✅ Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              <FontAwesomeIcon icon={faCogs} /> Services
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link-custom">
              <FontAwesomeIcon icon={faCalendar} /> Events
            </Nav.Link>
            <Nav.Link as={Link} to="/feedback" className="nav-link-custom">
              <FontAwesomeIcon icon={faCommentDots} /> Feedback
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
