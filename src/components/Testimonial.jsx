import React from "react";
import "../styles/Testimonial.css";
import dineshImg from "../assets/testimonials/test1.webp";
import shobhanImg from "../assets/testimonials/test2.webp";
import sarveshImg from "../assets/testimonials/test3.webp";
import jitendraImg from "../assets/testimonials/test4.webp";

const testimonials = [
  {
    name: "Dinesh",
    age: "38 Years",
    image: dineshImg,
    review:
      "With workload and increasing age, my sexual desire was decreasing. I was not getting sufficient erection in the penis, and discharge happened very quickly. But after taking this, my desire has increased, and sex lasts longer with a hard erection.",
  },
  {
    name: "Shobhan",
    age: "24 Years",
    image: shobhanImg,
    review:
      "I was married for 4 months and was very tense about the first night, but Horse Fire Tablet made my marital life wonderful. She was in pain in the morning but was very happy with my performance. Thanks, Horse Fire!",
  },
  {
    name: "Sarvesh Kumar",
    age: "32 Years",
    image: sarveshImg,
    review:
      "After taking Horse Fire Tablet, my sex timing has improved a lot, and I get stronger erections. Earlier, my life partner was not happy with me, but now she praises me and enjoys sex.",
  },
  {
    name: "Jitendra Jha",
    age: "29 Years",
    image: jitendraImg,
    review:
      "Horse Fire Tablet is a real sex booster. It helps me maintain stamina and erection for a long time. Also, my penis size increased, which is amazing.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}, {testimonial.age}</h3>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
