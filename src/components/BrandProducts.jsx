import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function BrandProducts({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 6;
  const navigate = useNavigate();
  const productsContainerRef = useRef(null);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  const handleOutOfStockClick = (productId) => {
    setOutOfStockClicked(productId);
    setTimeout(() => {
      setOutOfStockClicked(null);
    }, 5000);
  };

  const products = [
    {
      id: 1,
      name: "iPhone 16",
      brand: "Apple",
      price: ["157000৳", "175000৳", "195000৳"],
      oldPrice: ["165000৳", "185000৳", "205000৳"],
      image: "/img/ip 16 ultramarine.png",
      images: [
        "/img/ip 16 ultramarine.png",
        "/img/ip 16 pink.png",
        "/img/ip 16 teal.png",
        "/img/ip 16 white.png",
        "/img/ip 16 black.png",
      ],
      model: {
        phoneName: "iPhone 16",
        GB: "128GB",
        color: "ultramarine",
      },
      stock: "in-stock",
      colors: ["ultramarine", "pink", "teal", "white", "black"],
      storages: ["128GB", "256GB", "512GB"],

      specifications: {
        screenSize: "6.7 inches",
        processor: "A18 Bionic",
        ram: "8GB",
        battery: "4500mAh",
        camera: "48MP + 12MP Dual Rear, 12MP Front",
      },

      description:
        "The iPhone 16 features a stunning 6.7-inch display, the powerful A18 Bionic chip, and an advanced dual-camera system for capturing moments with precision. With a long-lasting 4500mAh battery, it's built for all-day performance.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 2,
      name: "iPhone 16 Plus",
      brand: "Apple",
      price: ["170000৳", "188000৳", "208000৳"],
      oldPrice: ["178000৳", "198000৳", "218000৳"],
      image: "/img/ip 16 pink.png",
      images: [
        "/img/ip 16 pink.png",
        "/img/ip 16 ultramarine.png",
        "/img/ip 16 teal.png",
        "/img/ip 16 white.png",
        "/img/ip 16 black.png",
      ],
      model: {
        phoneName: "iPhone 16 Plus",
        GB: "128GB",
        color: "pink",
      },
      stock: "in-stock",
      colors: ["pink", "ultramarine", "teal", "white", "black"],
      storages: ["128GB", "256GB", "512GB"],

      specifications: {
        screenSize: "6.9 inches",
        processor: "A18 Bionic",
        ram: "8GB",
        battery: "4700mAh",
        camera: "48MP + 12MP Dual Rear, 12MP Front",
      },

      description:
        "The iPhone 16 Plus features a large 6.9-inch display, the powerful A18 Bionic chip, and an advanced dual-camera system for capturing every detail with precision. With a long-lasting 4700mAh battery, it's built for all-day performance.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 14,
      name: "Samsung Galaxy S23 Ultra",
      brand: "Samsung",
      price: ["160000৳", "170000৳", "180000৳", "190000৳"],
      oldPrice: ["165000৳", "175000৳", "185000৳", "195000৳"],
      image: "/img/s23 gray.png",
      images: [
        "/img/s23 gray.png",
        "/img/s23 black.png",
        "/img/s23 green.png",
        "/img/s23 lavender.png",
      ],
      model: {
        phoneName: "Galaxy S23 Ultra",
        GB: "256GB",
        color: "Phantom Gray",
      },
      stock: "out-of-stock",
      colors: ["Phantom Gray", "Black", "Green", "Lavender"],
      storages: ["256GB", "512GB", "1TB"],
      specifications: {
        screenSize: "6.8 inches",
        processor: "Snapdragon 8 Gen 2",
        ram: "8GB / 12GB",
        battery: "5000mAh",
        camera: "200MP + 10MP + 10MP + 12MP Rear, 12MP Front",
      },
      description:
        "The Galaxy S23 Ultra comes with the powerful Snapdragon 8 Gen 2 chip, a 200MP quad-camera setup, and a 6.8-inch Dynamic AMOLED display with 120Hz refresh rate.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 15,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      price: ["140000৳", "150000৳", "160000৳"],
      oldPrice: ["145000৳", "155000৳", "165000৳"],
      image: "/img/x13pro white.png",
      images: [
        "/img/x13pro white.png",
        "/img/x13pro black.png",
        "/img/x13pro green.png",
      ],
      model: {
        phoneName: "Xiaomi 13 Pro",
        GB: "256GB",
        color: "Ceramic White",
      },
      stock: "in-stock",
      colors: ["Ceramic White", "Black", "Flora Green"],
      storages: ["256GB", "512GB"],
      specifications: {
        screenSize: "6.73 inches",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        battery: "4820mAh",
        camera: "50MP + 50MP + 50MP Rear, 32MP Front",
      },
      description:
        "The Xiaomi 13 Pro is powered by the Snapdragon 8 Gen 2, featuring a 50MP triple-camera setup co-engineered with Leica, and a 6.73-inch AMOLED display with 120Hz refresh rate.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 16,
      name: "OnePlus 11",
      brand: "OnePlus",
      price: ["95000৳", "105000৳", "115000৳"],
      oldPrice: ["98000৳", "108000৳", "118000৳"],
      image: "/img/one11 black.png",
      images: ["/img/one11 black.png", "/img/one11 green.png"],
      model: {
        phoneName: "OnePlus 11",
        GB: "256GB",
        color: "Titan Black",
      },
      stock: "in-stock",
      colors: ["Titan Black", "Eternal Green"],
      storages: ["128GB", "256GB", "512GB"],
      specifications: {
        screenSize: "6.7 inches",
        processor: "Snapdragon 8 Gen 2",
        ram: "8GB / 16GB",
        battery: "5000mAh",
        camera: "50MP + 48MP + 32MP Rear, 16MP Front",
      },
      description:
        "The OnePlus 11 is powered by the Snapdragon 8 Gen 2, featuring a 50MP triple-camera system co-developed with Hasselblad, and a 6.7-inch AMOLED display with 120Hz refresh rate.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 10,
      name: "Oppo Find X7 Ultra",
      brand: "Oppo",
      price: ["135000৳", "140000৳", "145000৳"],
      oldPrice: ["140000৳", "145000৳", "150000৳"],
      image: "/img/oppo black.png",
      images: [
        "/img/oppo black.png",
        "/img/oppo blue.png",
        "/img/oppo gold.png",
      ],
      model: {
        phoneName: "Oppo Find X7 Ultra",
        GB: "512GB",
        color: "Black",
      },
      stock: "out-of-stock",
      colors: ["Black", "Blue", "Gold"],
      storages: ["256GB", "512GB"],
      specifications: {
        screenSize: "6.82 inches",
        processor: "Snapdragon 8 Gen 3",
        ram: "16GB",
        battery: "5000mAh",
        camera: "50MP + 50MP + 64MP + 50MP Rear, 32MP Front",
      },
      description:
        "Oppo Find X7 Ultra features a periscope telephoto camera, an advanced Snapdragon 8 Gen 3 processor, and a 6.82-inch LTPO AMOLED display.",
      warranty: "1 Year Official Warranty",
    },
    // Add more products here...

    {
      id: 9,
      name: "Vivo X100 Pro",
      brand: "Vivo",
      price: ["120000৳", "125000৳", "130000৳"],
      oldPrice: ["125000৳", "130000৳", "135000৳"],
      image: "/img/v black.png",
      images: ["/img/v black.png", "/img/v blue.png", "/img/v orange.png"],
      model: {
        phoneName: "Vivo X100 Pro",
        GB: "256GB",
        color: "Black",
      },
      stock: "out-of-stock",
      colors: ["Black", "Blue", "Orange"],
      storages: ["256GB", "512GB"],
      specifications: {
        screenSize: "6.78 inches",
        processor: "Dimensity 9300",
        ram: "12GB",
        battery: "5400mAh",
        camera: "50MP + 50MP + 50MP Rear, 32MP Front",
      },
      description:
        "Vivo X100 Pro comes with a premium ZEISS co-engineered camera system, a massive 5400mAh battery, and a Dimensity 9300 chipset for top-tier performance.",
      warranty: "1 Year Official Warranty",
    },
    // Your other product data...
  ];

  // Filter products based on the selected filter
  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.brand === selectedFilter);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -220;
      const elementPosition =
        productsContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setLoading(true);
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  useEffect(() => {
    if (currentPage !== 1 || selectedFilter !== "All") {
      scrollToProductsContainer();
    }
  }, [currentPage, selectedFilter]);

  const handleProductClick = (product, e) => {
    // Check if the click was on the out-of-stock button
    const isOutOfStockButton = e.target.closest(".btn.out-of-stock");
    if (isOutOfStockButton) {
      e.preventDefault();
      e.stopPropagation();
      handleOutOfStockClick(product.id);
      return;
    }
    // Check if the click was on the View Details button
    const isViewDetailsButton = e.target.closest(".btn.buy-now");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="products-container">
      <h2>Top Brand Products</h2>
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Apple", "Samsung", "Xiaomi", "Vivo", "OnePlus", "Oppo"].map(
          (filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>
      {loading && <div className="loading-spinner"></div>}
      <div
        className={`products-grid ${loading ? "loading" : ""}`}
        ref={productsContainerRef}
      >
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={(e) => handleProductClick(product, e)}
            style={{
              cursor: product.stock === "in-stock" ? "pointer" : "default",
            }}
          >
            {product.stock === "out-of-stock" && (
              <div className="out-of-stock-badge">Out of Stock</div>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 style={{ fontSize: "14px" }}>{product.name}</h3>
              {product.model && (product.model.GB || product.model.color) && (
                <p style={{ fontSize: "14px" }} className="product-model">
                  {product.model.GB && `${product.model.GB}`}{" "}
                  {product.model.color && `, ${product.model.color}`}
                </p>
              )}
              <div key={product.price[0]}>
                <p className="product-price">
                  {product.price[0]}{" "}
                  <span className="old-price">{product.oldPrice[0]}</span>
                </p>
              </div>
              <div className="product-buttons">
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #000",
                  }}
                  className="btn buy-now"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`, { state: { product } });
                  }}
                >
                  View Details
                </button>
                {product.stock === "in-stock" ? (
                  <button
                    className="btn add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        ...product,
                        selectedColor: product.model.color,
                        selectedStorage: product.model.GB,
                        price: product.price[0],
                        quantity: 1,
                      });
                      showAlert();
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn out-of-stock"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOutOfStockClick(product.id);
                    }}
                    style={{ backgroundColor: "#ff4444" }}
                  >
                    {outOfStockClicked === product.id
                      ? "Out of Stock"
                      : "Out of Stock"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`pagination-button ${
              currentPage === 1 ? "disabled" : ""
            }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`pagination-button ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              );
            } else if (
              (page === 2 && currentPage > 4) ||
              (page === totalPages - 1 && currentPage < totalPages - 3)
            ) {
              return (
                <span key={page} className="pagination-dots">
                  ...
                </span>
              );
            }
            return null;
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`pagination-button ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

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
}

export default BrandProducts;
