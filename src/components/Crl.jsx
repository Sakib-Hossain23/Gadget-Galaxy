import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/styles/Crl.css"; // Import external CSS file

import styles from "./PG.module.css";

const slides = [
  {
    id: 1,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/34b5bf180145769.6505ae7623131.jpg",
    title: "",
    description: "",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f3832e180145769.6505ae76214ca.jpg",
    title: "",
    description: "",
    buttonText: "ORDER NOW",
  },
  {
    id: 3,
    image: "/img/b2.png",
    title: "",
    description: "",
    buttonText: "PRE-BOOK NOW",
  },
];

// Add a duplicate of the first slide to the end for smooth transition
const extendedSlides = [...slides, slides[0]];

const Crl = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (current === slides.length) {
      setIsTransitioning(false); // Disable transition effect
      setCurrent(0); // Instantly jump to the first slide
    } else {
      setIsTransitioning(true); // Enable transition for smooth effect
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 500);
    }
  }, [current]);

  return (
    <div>
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="carousel-btn left">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="carousel-btn right">
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      <header className={styles.header} style={{ display: "none" }}>
        <h1 className={styles.mainTitle}>
          Popular <span style={{ color: "#ff5722" }}> Online </span> Shop
        </h1>
      </header>
    </div>
  );
};

export default Crl;
