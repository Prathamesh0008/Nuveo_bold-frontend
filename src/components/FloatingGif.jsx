import React from "react";
import "../styles/FloatingGif.css"; // Make sure to create this file
import bikinigif from "../assets/gifs/twerking-unscreen.gif";

const FloatingGif = () => {
  return (
    <div className="floatingg-gif">
      <img src={bikinigif} alt="Floating Character" />
    </div>
  );
};

export default FloatingGif;
