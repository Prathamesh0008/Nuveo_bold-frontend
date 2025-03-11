import React, { useState, useRef, useEffect } from "react";
import "../styles/ImageComparisonSlider.css";
import leftImageSrc from "../assets/power/horn1.jpg";
import rightImageSrc from "../assets/power/horn2.jpg";

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Default center position
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100)); // Keep within bounds
    setSliderPosition(newPosition);
  };

  const handleMouseMove = (e) => isDragging.current && handleMove(e.clientX);
  const handleTouchMove = (e) => isDragging.current && handleMove(e.touches[0].clientX);

  const startDragging = () => (isDragging.current = true);
  const stopDragging = () => (isDragging.current = false);

  useEffect(() => {
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <div className="image-comparisonn-slider">
      <div
        className="comparison-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        {/* Right Image (Full View) */}
        <img src={rightImageSrc} alt="Right Image" className="comparison-image full" />

        {/* Left Image (Partially Revealed by Slider) */}
        <div 
          className="comparison-image left" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={leftImageSrc} alt="Left Image" />
        </div>

        {/* Slider Divider with Arrows */}
        <div className="comparison-slider" style={{ left: `${sliderPosition}%` }}>
          <div className="slider-handle">
            <span className="arrow left">←</span>
            <span className="arrow right">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
