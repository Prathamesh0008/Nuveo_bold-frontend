import React from "react";
import "../styles/CustomerReviews.css";
import abhik from "../assets/testimonials/test1.webp";
import brijesh from "../assets/testimonials/test2.webp";
import umesh from "../assets/testimonials/test3.webp";
import sanjay from "../assets/testimonials/test4.webp";
import sarvesh from "../assets/testimonials/test4.webp";
import characterImg from "../assets/power/sitting.png";
import abhikReviewImg from "../assets/testimonials/test1.webp";
import brijeshReviewImg from "../assets/testimonials/test2.webp";
import umeshReviewImg from "../assets/testimonials/test3.webp";
import sanjayReviewImg from "../assets/testimonials/test4.webp";
import sarveshReviewImg from "../assets/testimonials/test4.webp";

const reviews = [
  {
    image: abhik,
    name: "Abhik Mondal",
    date: "23 Feb 2025",
    review:
      "I was married for 4 months and was very tense about the first night but Horse Fire Tablet made my marital life wonderful. She was in pain in the morning but was very happy with my performance. Thanks Horse Fire.",
    reviewImage: abhikReviewImg,
  },
  {
    image: brijesh,
    name: "Brijesh Soni",
    date: "21 Feb 2025",
    review:
      "Before taking Horsefire, my penis was loose and small, I used to ejaculate quickly but now I can have sex for hours and the result of this medicine in penis enlargement is in front of you.",
    reviewImage: brijeshReviewImg,
  },
  {
    image: umesh,
    name: "Umesh Blacksmith",
    date: "18 Feb 2025",
    review:
      "This medicine is very effective. After taking it, my energy, power, size and sex timing have increased a lot. Men with small penis and premature ejaculation should definitely use this medicine. Its result on penis is unbelievable, you can see it.",
    reviewImage: umeshReviewImg,
  },
  {
    image: sanjay,
    name: "Sanjay Rajbhar",
    date: "15 Feb 2025",
    review:
      "I had the problem of premature ejaculation, the size was also less than I wanted. Then I took Horsefire tablet on the suggestion of my friend, it gave me tremendous benefits. My timing increased manifold and the change in penis size was also amazing in just 2 packs, now I can fuck any woman with this rod-like penis.",
    reviewImage: sanjayReviewImg,
  },
  {
    image: sarvesh,
    name: "Sarvesh Kumar",
    date: "13 Feb 2025",
    review:
      "After taking Horse Fire Tablet my sex timing has improved a lot and I get stronger erections. Earlier my life partner was not happy with me but now she praises me and enjoys sex.",
    reviewImage: sarveshReviewImg,
  },
];

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
    <img src={characterImg} alt="Character" className="character-navbar" />
      <h2 className="reviews-title">What Our Customer's Say</h2>
      <div className="reviews-container">
        {reviews.map((customer, index) => (
          <div key={index} className="review-card">
            <img src={customer.image} alt={customer.name} className="customer-image" />
            <div className="review-content">
              <h3 className="customer-name">{customer.name}</h3>
              <p className="review-date">{customer.date}</p>
              <p className="customer-review">{customer.review}</p>
              <img src={customer.reviewImage} alt="Customer shared" className="customer-review-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
