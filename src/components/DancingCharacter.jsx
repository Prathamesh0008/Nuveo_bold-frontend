import { useState, useEffect } from "react";
import bikinigif from "../assets/gifs/twerking-unscreen.gif";
import dancinggif from "../assets/gifs/cowgirl-unscreen.gif";
import jumpinggif from "../assets/gifs/booty-unscreen.gif"; 
import dancingAnimation from "../assets/gifs/blackbikini-unscreen.gif";
import greygirl from "../assets/gifs/com-video-to-gif-converter-unscreen (1).gif"
import purplebiki from "../assets/gifs/purplebikini-unscreen.gif"

import '../styles/DancingCharacter.css';

const characters = [bikinigif, dancinggif,jumpinggif, dancingAnimation,greygirl, purplebiki]; // Array of character animations

const DancingCharacter = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacter((prev) => (prev + 1) % characters.length); // Loop through animations
    }, 5000); // Change character every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="floating-animation">
      <img src={characters[currentCharacter]} alt="Floating Character" className="Character" />
    </div>
  );
};

export default DancingCharacter;

{/* <Lottie 
        animationData={dancingAnimation} 
        loop={true} 
        style={{ width: 200, height: 200 }} // Increase Size Here
      /> */}