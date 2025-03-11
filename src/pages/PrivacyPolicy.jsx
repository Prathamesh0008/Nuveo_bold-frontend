import React from "react";
import "../styles/UniquePrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="unique-privacy-policy">
    <div id="unique-privacy-policy" className="unique-privacy-policy">
      <h1 className="unique-privacy-title">Privacy Policy</h1>
      <p className="unique-effective-date">Effective Date: [02/28/2025]</p>

      <div className="unique-policy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Nuveo-ecommerce</strong>. We value your privacy and 
          are committed to protecting your personal information. This Privacy 
          Policy outlines how we collect, use, and safeguard your data when 
          you visit our website.
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone number, shipping address.</li>
          <li><strong>Payment Details:</strong> Processed securely via third-party payment providers.</li>
          <li><strong>Order History:</strong> Products purchased, dates, and order status.</li>
          <li><strong>Browsing Data:</strong> IP address, browser type, pages visited.</li>
        </ul>
      </div>

      <div className="unique-policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected data to:</p>
        <ul>
          <li>Process and fulfill your orders.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Send promotional emails and updates (if you opt-in).</li>
          <li>Prevent fraudulent transactions and ensure security.</li>
        </ul>
      </div>

      <div className="unique-policy-section">
        <h2>4. Data Security</h2>
        <p>
          We implement strict security measures to protect your data. 
          Your personal and payment information is encrypted and handled 
          securely by our trusted third-party payment processors.
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>5. Cookies & Tracking</h2>
        <p>
          Our website uses cookies to enhance your experience. You can choose 
          to disable cookies through your browser settings, but this may affect 
          site functionality.
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>6. Third-Party Sharing</h2>
        <p>We do <strong>not</strong> sell or trade your personal information. However, we may share data with:</p>
        <ul>
          <li>Payment gateways for secure transactions.</li>
          <li>Shipping providers to deliver your orders.</li>
          <li>Legal authorities if required by law.</li>
        </ul>
      </div>

      <div className="unique-policy-section">
        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request deletion of your data.</li>
          <li>Opt-out of marketing emails.</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </div>

      <div className="unique-policy-section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will 
          be posted on this page, and you will be notified if required by law.
        </p>
      </div>

      <div className="unique-policy-footer">
        <p>
          If you have any questions, contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
