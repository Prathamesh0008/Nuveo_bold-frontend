import React, { useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; // Import product data
import { CartContext } from "../context/CartContext"; // Import Cart Context
import "../styles/ProductsPage.css"; // Import CSS

const ProductsPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const { addToCart } = useContext(CartContext);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  return (
    <div className="products-page-container">
      <h2 className="products-page-title">Shop Our Collection</h2>

      <div className="products-grid">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {visibleProducts < products.length && (
        <button className="load-more-btn" onClick={loadMoreProducts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductsPage;
