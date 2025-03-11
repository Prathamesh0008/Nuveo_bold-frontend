import React, { useState, useEffect } from "react";
import "../styles/VideoTab.css";
import emma from "../assets/gifs/vas.gif";
import banana from "../assets/gifs/feel.gif";
import rebbeca from "../assets/gifs/strip.gif";
import vbboo from "../assets/gifs/vbboo.gif";
import teamas from "../assets/gifs/teamas.gif";
import vbooty from "../assets/gifs/vbooty.gif";
import basboo from "../assets/gifs/basboo.gif";
import vbbooo from "../assets/gifs/vbbooo.gif";
import vboo from "../assets/gifs/vboo.gif";
import expressas from "../assets/gifs/expressas.gif";
import blueboo from "../assets/gifs/blueboo.gif";
import vas from "../assets/gifs/vas.gif";

const gifSets = [
  [emma, rebbeca, banana], // Set 1
  [vbboo, vbbooo, vbooty], // Set 2
  [basboo, teamas, vboo], // Set 3
  [expressas, blueboo, vas],
];

const VideoTab = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % gifSets.length);
    }, 5000); // Change GIFs every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="video-tab">
        <button className="close-btn" onClick={handleClose}>✖</button>

        {/* Display synchronized GIFs */}
        {gifSets[currentSetIndex].map((gif, index) => (
          <img key={index} className="floating-gif" src={gif} alt={`GIF ${index + 1}`} />
        ))}
      </div>
    )
  );
};

export default VideoTab;
