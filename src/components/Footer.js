import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import "../styles/Footer.css"; // Updated CSS file name

const Footer = () => {
  return (
    <footer className="nuveo-footer">
      <div className="nuveo-footer-container">
        {/* Company Info */}
        <div className="nuveo-footer-section">
          <h3>Nuveo E-Commerce</h3>
          <p>Your trusted destination for high-quality adult products.</p>
          <p>Customer satisfaction & privacy are our top priorities.</p>
        </div>

        {/* Quick Links */}
        <div className="nuveo-footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="nuveo-footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/ship">Shipping Policy</Link></li>
            <li><Link to="/return">Return Policy</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="nuveo-footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive offers & updates on new products.</p>
          <form className="nuveo-newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social & Payment Methods */}
      <div className="nuveo-footer-bottom">
        <div className="nuveo-social-icons">
          <FaFacebook className="nuveo-icon" />
          <FaInstagram className="nuveo-icon" />
          <FaTwitter className="nuveo-icon" />
        </div>
        <div className="nuveo-payment-icons">
          <FaCcVisa className="nuveo-icon" />
          <FaCcMastercard className="nuveo-icon" />
          <FaCcPaypal className="nuveo-icon" />
        </div>
      </div>

      <p className="nuveo-footer-text">© {new Date().getFullYear()} Nuveo E-Commerce. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
