import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Extracts numeric price from a string like "100/box"
  const extractPrice = (price) => {
    if (!price) return 0;
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      const match = price.match(/\d+(\.\d+)?/);
      return match ? parseFloat(match[0]) : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + extractPrice(item.Price) * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const itemPrice = extractPrice(item.Price);
                return (
                  <tr key={item.ID}>
                    <td>
                      <img
                        src={item["main-image"]}
                        alt={item.Name}
                        className="cart-product-image"
                      />
                    </td>
                    <td>{item.Name}</td>
                    <td>
                      <button className="qty-btn" onClick={() => removeFromCart(item)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => addToCart(item, 1)}>+</button>
                    </td>
                    <td>₹{itemPrice.toFixed(2)}</td>
                    <td>₹{(itemPrice * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="remove-btn" onClick={() => removeFromCart(item, "all")}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="cart-total">
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
