import React from "react";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart 
} from "react-icons/fa";
import { GiLipstick, GiLovers, GiHeartBeats } from "react-icons/gi"; 
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="nuveo-contact">
      <div className="nuveo-contact-header">
        <h1 className="nuveo-contact-title">Get In Touch <GiLipstick /></h1>
        <p className="nuveo-contact-subtitle">We're here to fulfill your desires & answer your questions.</p>
      </div>

      <div className="nuveo-contact-container">
        {/* Contact Info Section */}
        <div className="nuveo-contact-info">
          <h2 className="nuveo-contact-heading">Contact Details <GiLovers /></h2>
          <ul className="nuveo-contact-list">
            <li className="nuveo-contact-item"><FaPhoneAlt /> <strong>Phone:</strong> +1 234 567 890</li>
            <li className="nuveo-contact-item"><FaEnvelope /> <strong>Email:</strong> support@nuveo.com</li>
            <li className="nuveo-contact-item"><FaMapMarkerAlt /> <strong>Address:</strong> 69 Pleasure Street, Love City</li>
            <li className="nuveo-contact-item"><FaClock /> <strong>Working Hours:</strong> 24/7 Customer Support</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="nuveo-contact-form">
          <h2 className="nuveo-form-heading">Send Us A Message <GiHeartBeats /></h2>
          <form id="nuveo-contact-form">
            <input type="text" className="nuveo-form-input" placeholder="Your Name" required />
            <input type="email" className="nuveo-form-input" placeholder="Your Email" required />
            <textarea className="nuveo-form-textarea" placeholder="Your Message" required></textarea>
            <button type="submit" className="nuveo-form-button">Send Message <FaHeart /></button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="nuveo-map-container">
        <iframe
          title="Google Map"
          id="nuveo-map"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
