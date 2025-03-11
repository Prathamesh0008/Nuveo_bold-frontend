import React from "react";
import "../styles/UniqueReturnPolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="unique-shipping-policy">
    <div id="unique-return-policy" className="unique-return-policy">
      <h1 className="unique-return-title">Return & Refund Policy</h1>
      <p className="unique-effective-date">Effective Date: [Insert Date]</p>

      <div className="unique-policy-section">
        <h2>1. No Returns on Adult Products</h2>
        <p>
          Due to the intimate nature of our products, **all sales are final**. We **do not accept returns, refunds, or exchanges** for any purchased items to maintain hygiene and customer safety.  
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>2. Damaged or Defective Products</h2>
        <p>
          If you receive a defective or damaged product, please contact us within **24 hours** of delivery at 
          <a href="mailto:support@example.com"> support@example.com</a>.  
        </p>
        <p>To process your request, we require: </p>
        <ul>
          <li>Clear photos or videos of the damaged/defective item.</li>
          <li>Order number and details of the issue.</li>
        </ul>
        <p>Once verified, we will either send a replacement or issue store credit.</p>
      </div>

      <div className="unique-policy-section">
        <h2>3. Non-Returnable & Non-Refundable Items</h2>
        <p>The following items **cannot be returned, exchanged, or refunded** under any circumstances:</p>
        <ul>
          <li>Sex toys, vibrators, and pleasure devices</li>
          <li>Lubricants, oils, and personal care products</li>
          <li>Intimate wear and lingerie</li>
          <li>Viagra, Cialis, and other medications</li>
          <li>Opened or used items</li>
          <li>Gift cards and promotional items</li>
        </ul>
      </div>

      <div className="unique-policy-section">
        <h2>4. Order Cancellations</h2>
        <p>
          Orders can only be canceled **within 2 hours** of purchase. After this period, the order is **processed and cannot be canceled or refunded**.  
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>5. Late or Missing Refunds</h2>
        <p>
          If we have issued a refund but you haven’t received it yet, please check with your bank or payment provider. Some transactions may take **5-7 business days** to reflect in your account.  
        </p>
      </div>

      <div className="unique-policy-section">
        <h2>6. Shipping Issues</h2>
        <p>
          We are **not responsible for lost or stolen packages** once they have been shipped. Please ensure you provide a **correct and secure shipping address** when placing your order.  
        </p>
      </div>

      <div className="unique-policy-footer">
        <p>
          If you have any concerns, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </div>
    </div>
    </div>
  );
};

export default ReturnPolicy;
