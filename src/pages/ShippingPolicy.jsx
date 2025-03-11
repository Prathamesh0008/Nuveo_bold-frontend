import React from "react";
import "../styles/UniqueShippingPolicy.css";

const UniqueShippingPolicy = () => {
  return (
    <div className="unique-shipping-policy">
    <div id="unique-shipping-policy" className="unique-shipping-policy-container">
      <h1 className="unique-shipping-title">Shipping Policy</h1>
      <p className="unique-effective-date"><strong>Effective Date:</strong> [02/28/2025]</p>

      <section className="unique-policy-section">
        <h2>1. Processing Time</h2>
        <p>Orders are processed within <strong>1-2 business days</strong> (excluding weekends and holidays).</p>
        <p>You will receive a confirmation email with tracking details once your order has shipped.</p>
      </section>

      <section className="unique-policy-section">
        <h2>2. Shipping Methods & Delivery Time</h2>
        <table className="unique-shipping-table">
          <thead>
            <tr>
              <th>Shipping Method</th>
              <th>Estimated Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Shipping</td>
              <td>5-7 business days</td>
            </tr>
            <tr>
              <td>Express Shipping</td>
              <td>2-3 business days</td>
            </tr>
            <tr>
              <td>Overnight Shipping</td>
              <td>1 business day</td>
            </tr>
          </tbody>
        </table>
        <p><em>Note: Delivery times may vary depending on your location and external factors beyond our control.</em></p>
      </section>

      <section className="unique-policy-section">
        <h2>3. Shipping Rates</h2>
        <p>Shipping costs are calculated at checkout based on your location and selected shipping method.</p>
        <p>Free standard shipping on orders above <strong>$[XX]</strong>.</p>
      </section>

      <section className="unique-policy-section">
        <h2>4. International Shipping</h2>
        <p>We currently <strong>[do/do not]</strong> offer international shipping.</p>
        <p>Customers are responsible for any customs fees, taxes, or import duties.</p>
      </section>

      <section className="unique-policy-section">
        <h2>5. Order Tracking</h2>
        <p>Once your order ships, you will receive a tracking number via email.</p>
        <p>You can track your order using the provided tracking link.</p>
      </section>

      <section className="unique-policy-section">
        <h2>6. Delayed or Lost Packages</h2>
        <p>If your order is delayed beyond the estimated delivery time, please contact us at <strong>[customer support email]</strong>.</p>
        <p>We are not responsible for lost or stolen packages after delivery.</p>
      </section>

      <section className="unique-policy-section">
        <h2>7. Address Changes & Order Modifications</h2>
        <p>Address changes can only be made before the order is shipped.</p>
        <p>If you need to update your shipping details, please contact us immediately.</p>
      </section>

      <section className="unique-policy-section">
        <h2>8. Returns & Refunds</h2>
        <p>For information on returns and refunds, please refer to our <strong>[Return Policy]</strong>.</p>
      </section>

      <footer className="unique-policy-footer">
        <p>For any further questions, feel free to contact us at <strong>[support email]</strong>.</p>
        <p>Thank you for choosing Nuveo!</p>
      </footer>
    </div>
    </div>
  );
};

export default UniqueShippingPolicy;
