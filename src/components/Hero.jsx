import React from "react";
import Products from "./Products";
import Carousel from "./Carousel";
import FeaturedCategories from "./FeaturedCategories";
import Banner from "./Banner";
import PG from "./PG";

import BrandProducts from "./BrandProducts";

const Hero = ({ addToCart }) => {
  return (
    <div>
      <Carousel />
      <FeaturedCategories />
      {/* Remove Search Bar */}
      <Products addToCart={addToCart} />
      <Banner />
      <BrandProducts addToCart={addToCart} />

      <PG />
    </div>
  );
};

export default Hero;
