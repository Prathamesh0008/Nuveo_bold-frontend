import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/AboutUs.css";

// Import team images
import team1 from "../assets/team.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const AboutUs = () => {
  return (
    <div id="about-us">
    <section className="about-us">
      <div className="about-header">
        <h1>About Nuveo</h1>
        <p>Committed to Excellence in Adult Wellness and Satisfaction</p>
      </div>

      {/* Company Introduction */}
      <div className="about-content">
        <p>
          Welcome to <span className="brand-name">Nuveo</span>, your trusted destination for premium adult wellness products. 
          We are committed to providing high-quality, safe, and exciting products that enhance your intimate experiences.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Nuveo, we empower individuals and couples to explore their desires in a safe and satisfying way.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where self-care, intimacy, and sexual wellness are embraced without stigma.
          </p>
        </div>
      </div>

      {/* Team Section with Slideshow */}
      <div className="our-team">
        <h2>Meet Our Team</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="team-swiper"
        >
          <SwiperSlide><img src={team1} alt="Team Member 1" /></SwiperSlide>
          <SwiperSlide><img src={team2} alt="Team Member 2" /></SwiperSlide>
          <SwiperSlide><img src={team3} alt="Team Member 3" /></SwiperSlide>
        </Swiper>
        <p>
          Our passionate team of experts works tirelessly to bring you the best products and services, ensuring a fulfilling experience.
        </p>
      </div>

      {/* Customer Support & Policies */}
      <div className="customer-support">
        <h2>Customer Support & Policies</h2>
        <ul>
          <li><strong>Discreet Packaging:</strong> Your privacy is 100% guaranteed.</li>
          <li><strong>Secure Payments:</strong> Multiple payment options with encryption.</li>
          <li><strong>Fast Shipping:</strong> Get your orders delivered quickly and safely.</li>
        </ul>
      </div>

      <div className="closing-statement">
        <h2>Join the Nuveo Family</h2>
        <p>
          Explore a world of confidence, intimacy, and satisfaction. Thank you for trusting us on your journey.
        </p>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
