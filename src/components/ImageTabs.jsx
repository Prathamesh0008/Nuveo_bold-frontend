import React, { useState, useEffect } from "react";
import "../styles/ImageTabs.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.webp";
import booty from '../assets/panty.png'
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3];

const ImageTabs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in effect after image change
      }, 500); // Delay image change to match transition time
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="image-tabs">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt="Product"
          className={`changing-image ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>

      <button className="order-now" onClick={()=>navigate("/products")}  ><img src={booty} alt="" className="booty"/>Order Now</button>

      <div className="offer-section">
        <p>🔥 Limited Time Offer! Get Yours Now! 🔥</p>
      </div>
    </section>
  );
};

export default ImageTabs;
