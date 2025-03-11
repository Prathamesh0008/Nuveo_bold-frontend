import React from "react";
import "../styles/MarriedLifeTips.css";
import sticker1 from "../assets/stickers/sticker7.png";
import sticker2 from "../assets/stickers/sticker8.png";
import sticker3 from "../assets/stickers/sticker9.png";

const MarriedLifeTips = () => {
  const tips = [
    {
      id: 1,
      title: "Women's Sexual Desire",
      content:
        "Women's sexual desire is so strong that it cannot be satisfied by a weak man. Women expect a big, hard penis and long-lasting sex for this. Awakening the sexual energy in a woman is the true test for men, and this is where every weak man loses.",
    },
    {
      id: 2,
      title: "True Manhood",
      content:
        "Men who wet the bed with semen even at the age of 60-65 are blessed by Kaamdev himself. In the eyes of experts in today's time, only he is a true man who can squeeze a woman well in bed, otherwise the woman starts considering the man a headache.",
    },
    {
      id: 3,
      title: "Ayurvedic Solutions",
      content:
        "Ayurvedic scriptures mention some effective medicines to get rid of impotence, which have been included in Cen Force Tablet with a special procedure. It makes the penis strong and hard by giving strength to the weak cells, relaxing the nerves, and strengthening them.",
    },
  ];

  return (
    <section className="married-life-tips">
      {/* Stickers */}
      {/* <img src={sticker1} alt="sticker1" className="sticker sticker-1" />
      <img src={sticker3} alt="sticker2" className="sticker sticker-2" />
      <img src={sticker2} alt="sticker3" className="sticker sticker-3" /> */}
      {/* <img src={sticker4} alt="sticker4" className="sticker sticker-4" /> */}

      <h2 className="tips-title">
        If you want to maintain happiness in your married life for years, then pay attention to these things!
      </h2>

      <div className="tips-container">
        {tips.map((tip) => (
          <div key={tip.id} className="tip-box">
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarriedLifeTips;
