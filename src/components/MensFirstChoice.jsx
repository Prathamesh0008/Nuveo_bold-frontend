import React from "react";
import "../styles/MensFirstChoice.css";
import { GiCardboardBox, GiReceiveMoney, GiThumbUp, GiShield } from "react-icons/gi";

const MensFirstChoice = () => {
  return (
    <section className="mens-choice">
      <h2 className="section-title">Men's First Choice</h2>
      <div className="features">
        {/* <div className="feature">
          <GiReceiveMoney className="icon" />
          <p>COD Available</p>
        </div> */}
        <div className="feature">
          <GiThumbUp className="icon" />
          <p>Satisfied Customers</p>
        </div>
        <div className="feature">
          <GiShield className="icon" />
          <p>Secured Purchasing</p>
        </div>
        <div className="feature">
          <GiCardboardBox className="icon" />
          <p>Fast Shipping</p>
        </div>
      </div>
    </section>
  );
};

export default MensFirstChoice;
