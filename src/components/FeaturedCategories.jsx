import React from "react";
import "../assets/styles/FeaturedCatagories.css";

const categories = [
  { name: "Phones & Tablets", image: "img/phones-tablets.png" },
  { name: "iphone", image: "/img/iphone.png" },

  { name: "MacBook", image: "/img/macbook.png" },
  { name: "iPad", image: "/img/ipad.png" },
  { name: "Airpods", image: "/img/airpods pro.png" },
  { name: "Overhead", image: "/img/headphone.png" },

  { name: "Smart Watch", image: "/img/watch 2.png" },
  { name: "Power Adapter", image: "/img/adapter.png" },
  { name: "Power Bank", image: "/img/power-bank.png" },
  { name: "Pendrive", image: "/img/pendrive.png" },
  { name: "Speakers", image: "/img/speaker.png" },
  { name: "Mouse", image: "/img/mouse.png" },
];

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <h2 className="featured-title">Featured Categories</h2>
      <p className="featured-subtitle">
        Get your desired product from featured categories
      </p>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-card ${
              category.highlight ? "highlight-card" : ""
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-icon"
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
