import React, { useEffect, useRef, useState } from "react";
import "../styles/StackedImages.css";
import topImg from "../assets/power/tops.webp";
import bottomImg from "../assets/power/bottoms.webp";

const StackedImages = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`stacked-images-container ${isVisible ? "visible" : ""}`}
      ref={containerRef}
    >
      <img src={topImg} alt="Top Product" className="stacked-image top" />
      <img src={bottomImg} alt="Bottom Product" className="stacked-image bottom" />
    </div>
  );
};

export default StackedImages;
