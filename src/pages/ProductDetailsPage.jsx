import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products"; 
import "../styles/UniqueProductDetailsPage.css"; 
import ProductsPage from "./ProductsPage";

const ProductDetailsPage = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => String(p.ID) === String(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.["main-image"]);
  const [fade, setFade] = useState(false);

  // Reset selected image when a new product is selected
  useEffect(() => {
    if (product) {
      setSelectedImage(product["main-image"]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="unique-product-details-container not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back to Shop</button>
      </div>
    );
  }

  const handleImageChange = (img) => {
    setFade(true); 
    setTimeout(() => {
      setSelectedImage(img);
      setFade(false);
    }, 300); 
  };

  return (
    <div className="unique-product-details-page">
      <div className="unique-product-details-container">
        {/* Main Image Section */}
        <div className="unique-product-image-section">
          <img 
            src={selectedImage} 
            alt={product.Name} 
            className={`unique-product-detail-image ${fade ? "fade-out" : "fade-in"}`}
          />
          {/* Extra Images */}
          {product.Images && product.Images.length > 0 && (
            <div className="extra-images-container">
              {product.Images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Product ${index + 1}`} 
                  className="extra-product-image" 
                  onClick={() => handleImageChange(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="unique-product-info-section">
          <h2 className="unique-product-title">{product.Name}</h2>
          <p className="unique-product-category">{product.Category}</p>
          <p className="unique-product-price">₹{product.Price}</p>
          <p className="unique-product-description">{product.Description}</p>
          <p className="unique-product-ratings">{product.Ratings}</p>

          <div className="unique-quantity-control">
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
            <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>

          <button 
            className="unique-add-to-cart-btn" 
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Related Products */}
      <ProductsPage/>
    </div>
  );
};

export default ProductDetailsPage;
