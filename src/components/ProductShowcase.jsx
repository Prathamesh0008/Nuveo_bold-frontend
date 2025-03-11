import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { CartContext } from "../context/CartContext";
import "../styles/ProductShowcase.css";
import characterImg from "../assets/Brandi.png"; 
import products from "../data/products"; 

const ProductShowcase = () => {
  const { addToCart } = useContext(CartContext); 
  const displayedProducts = products.slice(0, 5); // Get only the first 5 products

  return (
    <section className="product-showcase">
      <div className="title-container">
        <img src={characterImg} alt="Character" className="character-image" />
        <h2 className="product-title">Our Best-Selling Power Supplements</h2>
      </div>
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div key={product.ID} className="product-card">
            {/* Make the product image & name clickable */}
            <Link to={`/product/${product.ID}`} className="product-link">
              <img 
                src={product["main-image"]} 
                alt={product.Name} 
                className="product-image" 
              />
              <h3 className="product-name">{product.Name}</h3>
            </Link>

            <p className="product-category">{product.Category}</p>
            <p className="product-price">
              {product["Discounted Price"] ? (
                <>
                  <span className="discount-price">₹{product["Discounted Price"]}</span>
                  <span className="original-price">₹{product.Price}</span>
                  <span className="discount-percentage">
                    ({Math.round(((parseFloat(product.Price) - parseFloat(product["Discounted Price"])) / parseFloat(product.Price)) * 100)}% OFF)
                  </span>
                </>
              ) : (
                <span className="discount-price">₹{product.Price}</span>
              )}
            </p>
            
            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={() => addToCart(product, 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
