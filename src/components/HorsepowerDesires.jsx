import React from "react";
import "../styles/HorsepowerDesires.css";
import desire1 from "../assets/power/jhonny.jpg";
import desire2 from "../assets/power/filthy.jpg";
import desire3 from "../assets/power/fetish.jpg";
import desire4 from "../assets/power/NatTurnher.jpg";
import desire5 from "../assets/power/g6.jpg";
import desire6 from "../assets/power/g1.jpg";
import desire7 from "../assets/power/g2.jpg";
import desire8 from "../assets/power/g3.jpg";

const desires = [
  { image: desire1, title: "Long sex duration, strong performance" },
  { image: desire7, title: "Increase in length and hardness of penis" },
  { image: desire8, title: "Frequent urge to have sex" },
  { image: desire2, title: "Strong stamina and plenty of power" },
  { image: desire5, title: "Strong stamina and plenty of power" },
  { image: desire3, title: "Strong stamina and plenty of power" },
  { image: desire4, title: "Strong stamina and plenty of power" },
  { image: desire8, title: "Strong stamina and plenty of power" },
];

const HorsepowerDesires = () => {
  return (
    <section className="desires-section">
      <h2 className="desires-title">
        What Desires Will You Have After Getting Horsepower Tablets?
      </h2>
      <p className="desires-description">
        If you desire masculine strength like that of a horse or a bull, then by taking
        <strong> Horse Fire Tablet</strong> manufactured by <strong>AR Ayurveda</strong>
        regularly for just 3 months, your sex power will never decrease and you will
        become a pro player of sex. The passion and energy will be so high that your
        partner will be stunned to see it and will moan with every shot of the big penis.
      </p>

      {/* Scrolling Container */}
      <div className="scrolling-wrapper">
        <div className="scrolling-content">
          {desires.concat(desires).map((desire, index) => (
            <div key={index} className="scroll-item">
              <img src={desire.image} alt={desire.title} className="scroll-image" />
            </div>
          ))}
        </div>
      </div>

      <p className="desires-footer">
        So what are you waiting for? Make it a part of your lifestyle to satisfy your partner in sex.
      </p>
    </section>
  );
};

export default HorsepowerDesires;
