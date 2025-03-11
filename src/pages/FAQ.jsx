import React, { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "What is Nuveo?",
    answer: "Nuveo is an adult e-commerce store that offers a variety of high-quality adult products delivered discreetly to your doorstep.",
  },
  {
    question: "Do you offer discreet packaging?",
    answer: "Yes, all orders are shipped in plain, unmarked packaging to ensure your privacy.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and other secure online payment methods.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary based on your location, but standard shipping usually takes 3-7 business days.",
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Due to the nature of our products, we do not accept returns or exchanges unless the item is defective.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team via email at support@nuveo.com or through our contact form on the website.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use industry-standard encryption and data protection practices to ensure your personal information remains secure.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within [Specify Countries]. We are working on expanding our shipping services soon.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email, which you can use to track your shipment in real-time.",
  },
  {
    question: "Are your products body-safe?",
    answer: "Yes, we source all our products from reputable manufacturers that meet strict quality and safety standards.",
  },
  {
    question: "Can I cancel my order after placing it?",
    answer: "Orders can be canceled within 24 hours of placement. Please contact customer support as soon as possible for assistance.",
  },
  {
    question: "What should I do if my order arrives damaged?",
    answer: "If you receive a damaged item, please contact us within 48 hours of delivery with photos, and we will arrange a replacement or refund.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer: "Yes, we frequently offer special promotions and discounts. Subscribe to our newsletter to stay updated on exclusive deals.",
  },
  {
    question: "Can I place an order without creating an account?",
    answer: "Yes, you can checkout as a guest, but creating an account allows for a faster checkout process and order tracking.",
  },
  {
    question: "Do you have a loyalty program?",
    answer: "Yes! Our loyalty program rewards frequent customers with discounts, exclusive offers, and early access to new products.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to the most common questions about our services.</p>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {item.question}
                <span className={`faq-toggle ${openIndex === index ? "rotate" : ""}`}>&#9660;</span>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
