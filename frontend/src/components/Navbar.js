import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faCogs, faCalendar, faCommentDots } from "@fortawesome/free-solid-svg-icons"; // changed icon
import "../styles/Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* ✅ Logo */}
        <Navbar.Brand as={Link} to="/" className="logo">
           AI Solutions
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link-custom">
              <FontAwesomeIcon icon={faBook} /> Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              <FontAwesomeIcon icon={faCogs} /> Services
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link-custom">
              <FontAwesomeIcon icon={faCalendar} /> Events
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="nav-link-custom">
              <FontAwesomeIcon icon={faCommentDots} /> Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
