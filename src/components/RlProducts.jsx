import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Galaxy M35 5G",
    price: "23000৳",
    oldPrice: "24500৳",
    image: "img/b5.png",
  },
  {
    id: 2,
    name: "Honor X8b",
    price: "24500৳",
    oldPrice: "36500৳",
    image: "img/b7.jpg",
  },
  {
    id: 3,
    name: "Galaxy A55 5G",
    price: "37700৳",
    oldPrice: "43000৳",
    image: "img/b8.jpg",
  },
  {
    id: 4,
    name: "Pixel 7 Pro",
    price: "50000৳",
    oldPrice: "56000৳",
    image: "img/b10.jpeg",
  },
  {
    id: 5,
    name: "Motorola Edge 50 Fusion",
    price: "32200৳",
    oldPrice: "38000৳",
    image: "img/b10.jpeg",
  },
  {
    id: 6,
    name: "Pixel 9",
    price: "79000৳",
    oldPrice: "98000৳",
    image: "img/b11.png",
  },
  {
    id: 7,
    name: "Redmi Pad SE",
    price: "22800৳",
    oldPrice: "31500৳",
    image: "img/b12.jpg",
  },
  {
    id: 8,
    name: "iQOO Z9s Pro 5G",
    price: "33700৳",
    oldPrice: "34200৳",
    image: "img/b13.jpeg",
  },
  {
    id: 9,
    name: "Redmi Note 13 Pro Plus 5G",
    price: "32200৳",
    oldPrice: "36500৳",
    image: "img/b14.jpg",
  },
  {
    id: 10,
    name: "Galaxy Tab S9 FE",
    price: "37500৳",
    oldPrice: "45000৳",
    image: "img/b15.jpeg",
  },
  {
    id: 11,
    name: "iPad mini 7",
    price: "60000৳",
    oldPrice: "62000৳",
    image: "img/b12.jpg",
  },
  {
    id: 12,
    name: "MacBook Pro M3",
    price: "120000৳",
    oldPrice: "140000৳",
    image: "img/b11.png",
  },
];

function RlProducts() {
  const [visibleProducts, setVisibleProducts] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]); // Initially, show first 12 products

  const goToNext = () => {
    setVisibleProducts((prev) => {
      // Shift elements one by one to the left
      const nextProducts = [
        ...prev.slice(1), // Remove the first element
        prev[0], // Add the first element to the end
      ];
      return nextProducts;
    });
  };

  const goToPrevious = () => {
    setVisibleProducts((prev) => {
      // Shift elements one by one to the right
      const prevProducts = [
        prev[prev.length - 1], // Add the last element to the beginning
        ...prev.slice(0, prev.length - 1), // Remove the last element
      ];
      return prevProducts;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const productCardStyle = {
    backgroundColor: "#fff", // Clean white background for a modern feel
    border: "1px solid #e0e0e0", // Light border for a subtle, modern touch
    borderRadius: "10px", // Rounded corners for a softer, sleek design
    overflow: "hidden", // Ensures content stays inside the card
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for a floating effect
    textAlign: "center", // Centers all content
    transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth transitions for hover effects
    padding: "10px", // Compact padding to save space
    flex: "0 0 23%", // Fits more items in a row (adjust based on design needs)
    margin: "10px 0px", // Adds spacing between cards
    cursor: "pointer", // Indicates interactivity
  };

  const productImageStyle = {
    width: "100%", // Ensures the image spans the full width of the card
    height: "150px", // Fixed height for consistent size
    objectFit: "contain", // Ensures the image scales nicely without distortion
    borderBottom: "1px solid #ddd", // Adds a subtle separator below the image
    borderRadius: "8px 8px 0 0", // Rounded corners at the top for better aesthetics
  };

  const productDetailsStyle = {
    padding: "10px",
  };

  const productPriceStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#1c006f",
    display: "inline-block",
    marginRight: "10px",
  };

  const oldPriceStyle = {
    textDecoration: "line-through",
    color: "#888",
    marginLeft: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#ff7f00",
    color: "#fff",
    padding: "6px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "0.85rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
    marginBottom: "10px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ff6600",
  };

  // Responsive styles
  const getCardFlexBasis = () => {
    const width = window.innerWidth;

    if (width <= 480) return "45%"; // 1 item per row
    if (width <= 768) return "45%"; // 2 items per row
    if (width <= 1024) return "30%"; // 3 items per row
    return "18%"; // Default 5 items per row
  };

  return (
    <div
      className="products-container"
      style={{ padding: "15px", textAlign: "center" }}
    >
      <h2
        style={{ fontSize: "1.5rem", marginBottom: "15px", fontWeight: "bold" }}
      >
        Featured Products
      </h2>
      <div
        className="product-slider"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div
          className="product-grid"
          style={{ display: "flex", transition: "transform 0.5s ease-out" }}
        >
          {visibleProducts.map((index) => {
            const product = products[index];
            return (
              <div
                key={product.id}
                className="product-card"
                style={{
                  ...productCardStyle,
                  flex: `0 0 ${getCardFlexBasis()}`,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  style={productImageStyle}
                />
                <div className="product-details" style={productDetailsStyle}>
                  <h3>{product.name}</h3>
                  <p className="product-price" style={productPriceStyle}>
                    {product.price}{" "}
                    <span className="old-price" style={oldPriceStyle}>
                      {product.oldPrice}
                    </span>
                  </p>
                  <div
                    className="product-buttons"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      style={{
                        ...buttonStyle,
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
                      style={{ ...buttonStyle, backgroundColor: "#007bff" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#0056b3")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007bff")
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="navigation-buttons"
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <button
          onClick={goToPrevious}
          style={{
            padding: "10px",
            marginRight: "15px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            transition: "background-color 0.3s ease",
          }}
        >
          <FaArrowLeft style={{ fontSize: "20px" }} />
        </button>

        <button
          onClick={goToNext}
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            transition: "background-color 0.3s ease",
          }}
        >
          <FaArrowRight style={{ fontSize: "20px" }} />
        </button>
      </div>
    </div>
  );
}

export default RlProducts;
