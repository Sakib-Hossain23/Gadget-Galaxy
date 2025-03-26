import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const handleQuantityChange = (operation, index) => {
    const updatedCart = [...cart];
    if (operation === "increase") {
      updatedCart[index].quantity += 1;
    } else if (operation === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    updateCart(updatedCart);
  };

  const handleRemoveProduct = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price) || 0; // Ensure price is a number
      return total + price * product.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img
            src="./img/Empty Cart.png"
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <h3>
            Your cart is <span className="highlight">Empty</span>
          </h3>
          <p>Must add items to the cart before you proceed to check out</p>
          <Link to="/">
            <button className="return-home-btn">Return Home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.image || "https://via.placeholder.com/100"}
                        alt={product.name}
                        className="product-imagee"
                      />
                    </td>
                    <td>
                      <div
                        style={{
                          textAlign: "start",
                        }}
                      >
                        <strong>{product.name}</strong>
                        {/* Display Color only if it exists */}
                        {product.selectedColor && (
                          <div>
                            <span>Color: {product.selectedColor}</span>
                          </div>
                        )}
                        {/* Display Storage only if it exists */}
                        {product.selectedStorage && (
                          <div>
                            <span>Storage: {product.selectedStorage}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div
                        className="quantity-controls"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={() =>
                            handleQuantityChange("decrease", index)
                          }
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange("increase", index)
                          }
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{parseFloat(product.price) || 0}৳</td>
                    <td>
                      {parseFloat(product.price) * product.quantity || 0}৳
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveProduct(index)}
                        className="delete-btn"
                      >
                        <img
                          src="./img/remove-icon.png"
                          alt="Remove Product"
                          className="delete-icon"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-summary">
            <div>
              <span>Sub-Total:</span>
              <span>BDT {calculateSubtotal()}</span>
            </div>
            <div>
              <span>Delivery Charge:</span>
              <span>(will be added)</span>
            </div>
            <div>
              <span>Total Discount:</span>
              <span>0</span>
            </div>
            <div>
              <span>Total:</span>
              <span>BDT {calculateSubtotal()}</span>
            </div>
          </div>

          <div className="cart-buttons">
            <Link to="/">
              <button className="continue-btn">Continue Shopping</button>
            </Link>
            {/* Link to checkout */}
            <Link to="/checkout">
              <button className="checkout-btn">Check Out</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
