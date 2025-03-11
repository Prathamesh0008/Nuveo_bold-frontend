import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css"; // Import the CSS file
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.jpeg";
import banner5 from "../assets/banner5.jpeg";
import banner6 from "../assets/banner3.jpg";
import banner7 from "../assets/banner7.jpg";
import banner8 from "../assets/banner8.jpg";
import banner9 from "../assets/banner9.jpg";
import banner10 from "../assets/banner10.jpg";
import banner11 from "../assets/banner11.webp";
import banner12 from "../assets/banner12.jpg";


// Image and Description Mapping
const slides = [
  { image: banner1, text: "GET FIRMER AND LONG LASTING ERECTION" },
  { image: banner2, text: "ENHANCE STAYING POWER ON BED." },
  { image: banner3, text: "IMPROVED SEXUAL CONFIDENCE." },
  { image: banner4, text: "Make her HORNY and Moan like this." },
  { image: banner5, text: "ENLARGE PENIS SIZE." },
  // { image: banner6, text: "ENLARGE PENIS SIZE." },
  { image: banner7, text: "ENLARGE PENIS SIZE." },
  { image: banner8, text: "ENLARGE PENIS SIZE." },
  { image: banner9, text: "ENLARGE PENIS SIZE." },
  { image: banner10, text: "ENLARGE PENIS SIZE." },
  { image: banner11, text: "ENLARGE PENIS SIZE." },
  { image: banner12, text: "ENLARGE PENIS SIZE." },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="hero-content">
        {/* <h1>Welcome to Nuveo Ecommerce</h1> */}
        <p>{slides[currentSlide].text}</p> {/* Dynamic Description */}
        <button onClick={() => navigate("/products")}>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
