import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderNowSection.css";
import booty from '../assets/panty.png'



const OrderNowSection = () => {
  const navigate= useNavigate();
  return (
    <section className="order-now-section">
      <button className="order-now-btn"  onClick={()=>navigate("/products")}><img src={booty} alt="" className="booty" />Order Now</button>
      
      <div className="offer-banner">
      
        <p>🔥 Limited Time Offer: Get 20% OFF on Your First Order! 🔥</p>
      </div>
    </section>
  );
};

export default OrderNowSection;
