import React from "react";
import "../assets/styles/banner.css";

const Banner = () => {
  const images = ["img/a5.png", "img/a7.png"];

  return (
    <div className="banner-container">
      {images.map((img, index) => (
        <div key={index} className="banner-image">
          <img src={img} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Banner;
