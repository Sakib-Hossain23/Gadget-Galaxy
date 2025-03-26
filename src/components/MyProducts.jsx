// MyProducts.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProducts = ({ addToCart }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000); // Alert stays for 5 seconds
  };

  const products = [
    {
      id: 6,
      name: "Galaxy M35 5G",
      price: "23000৳",
      oldPrice: "24500৳",
      image: "/img/ipn.png",
      images: ["/img/ipn.png", "/img/b5.png", "/img/b7.jpg", "/img/b8.jpg"],
      model: { phoneName: "Galaxy M35", GB: "128GB", color: "Black" },
      colors: ["Black", "Green", "Blue", "Violet"],
      storages: ["128GB", "256GB"],
    },
    {
      id: 7,
      name: "Honor X8b",
      price: "24500৳",
      oldPrice: "36500৳",
      image: "/img/b5.png",
      images: ["/img/b5.png", "/img/ipn.png", "/img/b7.jpg"],
      model: { phoneName: "Honor X8b", GB: "256GB", color: "Silver" },
      colors: ["Silver", "Gold", "Blue"],
      storages: ["256GB", "512GB"],
    },
    {
      id: 8,
      name: "Galaxy A55 5G",
      price: "37700৳",
      oldPrice: "43000৳",
      image: "/img/b7.jpg",
      images: ["/img/b7.jpg", "/img/b8.jpg", "/img/b10.jpeg"],
      model: { phoneName: "Galaxy A55", GB: "128GB", color: "Blue" },
      colors: ["Blue", "Black", "White"],
      storages: ["128GB", "256GB"],
    },
    {
      id: 9,
      name: "Pixel 7 Pro",
      price: "50000৳",
      oldPrice: "56000৳",
      image: "/img/b8.jpg",
      images: ["/img/b8.jpg", "/img/ipn.png", "/img/b5.png"],
      model: { phoneName: "Pixel 7 Pro", GB: "512GB", color: "Black" },
      colors: ["Black", "White", "Silver"],
      storages: ["256GB", "512GB"],
    },
    {
      id: 10,
      name: "Motorola Edge 50 Fusion",
      price: "32200৳",
      oldPrice: "38000৳",
      image: "/img/b7.jpg",
      images: ["/img/b7.jpg", "/img/b10.jpeg", "/img/b11.png"],
      model: { phoneName: "Edge 50 Fusion", GB: "128GB", color: "Red" },
      colors: ["Red", "Black", "Blue"],
      storages: ["128GB", "256GB"],
    },
  ];

  return (
    <div className="products-container">
      <h2>My Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-model">
                {`${product.model.GB}, ${product.model.color}`}
              </p>
              <p className="product-price">
                {product.price}{" "}
                <span className="old-price">{product.oldPrice}</span>
              </p>
              <div className="product-buttons">
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #000",
                  }}
                  className="btn buy-now"
                >
                  Buy Now
                </button>
                <button
                  className="btn add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      ...product,
                      selectedColor: product.model.color,
                      selectedStorage: product.model.GB,
                      quantity: 1, // Start with 1 quantity
                    });
                    showAlert();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {alertVisible && (
        <div className="custom-alert">
          <img
            className="alert-image"
            src="./img/right.png"
            alt="Success Icon"
          />
          <div className="alert-message">Successfully added product</div>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
