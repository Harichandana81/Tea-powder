import React from 'react';
import { FaHome, FaInfoCircle, FaTools, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaBlogger } from 'react-icons/fa'; // Import icons
import './Footer.css'; // For styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing the best services and products to our customers.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">
                <FaHome className="icon" /> Home
              </a>
            </li>
            <li>
              <a href="/about">
                <FaInfoCircle className="icon" /> About
              </a>
            </li>
            <li>
              <a href="/product">
                <FaTools className="icon" /> Products
              </a>
            </li>
            <li>
              <a href="/blog">
                <FaBlogger className="icon" /> Blog
              </a>
            </li>
            <li>
              <a href="/footer">
                <FaEnvelope className="icon" /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" /> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;