import React from "react";
import "./Footer.css"; // Make sure this CSS file exists and is styled

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <strong>AI Solutions</strong>. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
