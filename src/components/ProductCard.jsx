import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css"; 

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.ID}`)} style={{ cursor: "pointer" }}>
      <img src={product["main-image"]} alt={product.Name} className="product-image" />
      <h3 className="product-name">{product.Name}</h3>
      <p className="product-category">{product.Category}</p>
      <p className="product-price">₹{product.Price}</p>

      <div className="quantity-control">
        <button onClick={(e) => { e.stopPropagation(); setQuantity((prev) => Math.max(1, prev - 1)); }}>-</button>
        <input type="number" value={quantity} onChange={handleQuantityChange} onClick={(e) => e.stopPropagation()} />
        <button onClick={(e) => { e.stopPropagation(); setQuantity((prev) => prev + 1); }}>+</button>
      </div>

      <p className="product-ratings">{product.Ratings}</p>
      <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); addToCart(product, quantity); }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
