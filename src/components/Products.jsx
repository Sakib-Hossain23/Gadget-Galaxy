import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Products.css";

function Products({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 12;
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
      id: 3,
      name: "iPhone 16 Pro",
      brand: "Apple",
      price: ["190000৳", "210000৳", "235000৳", "260000৳"],
      oldPrice: ["200000৳", "220000৳", "245000৳", "270000৳"],
      image: "/img/ip 16 pro black titanium.png",
      images: [
        "/img/ip 16 pro black titanium.png",
        "/img/ip 16 pro desert titanium.png",
        "/img/ip 16 pro natural titanium.png",
        "/img/ip 16 pro white titanium.png",
      ],
      model: {
        phoneName: "iPhone 16 Pro",
        GB: "128GB",
        color: "Black Titanium",
      },
      stock: "in-stock",
      colors: [
        "Black Titanium",
        "Desert Titanium",
        "Natural Titanium",
        "White Titanium",
      ],
      storages: ["128GB", "256GB", "512GB", "1TB"],

      specifications: {
        screenSize: "6.7 inches",
        processor: "A18 Pro Bionic",
        ram: "8GB",
        battery: "4800mAh",
        camera: "48MP + 12MP + 12MP Triple Rear, 12MP Front",
      },

      description:
        "The iPhone 16 Pro features a stunning 6.7-inch ProMotion display, the powerful A18 Pro Bionic chip, and an advanced triple-camera system for professional-grade photography. With a durable titanium build and a long-lasting 4800mAh battery, it's designed for the ultimate premium experience.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 4,
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      price: ["210000৳", "230000৳", "255000৳", "280000৳"],
      oldPrice: ["220000৳", "240000৳", "265000৳", "290000৳"],
      image: "/img/ip 16 pro desert titanium.png",
      images: [
        "/img/ip 16 pro desert titanium.png",
        "/img/ip 16 pro natural titanium.png",
        "/img/ip 16 pro white titanium.png",
        "/img/ip 16 pro black titanium.png",
      ],
      model: {
        phoneName: "iPhone 16 Pro Max",
        GB: "128GB",
        color: "Desert Titanium",
      },
      stock: "in-stock",
      colors: [
        "Desert Titanium",
        "Natural Titanium",
        "White Titanium",
        "Black Titanium",
      ],
      storages: ["128GB", "256GB", "512GB", "1TB"],

      specifications: {
        screenSize: "6.9 inches",
        processor: "A18 Pro Bionic",
        ram: "8GB",
        battery: "5000mAh",
        camera: "48MP + 12MP + 12MP Triple Rear, 12MP Front",
        refreshRate: "120Hz ProMotion",
        material: "Titanium Frame",
      },

      description:
        "The iPhone 16 Pro Max features a massive 6.9-inch ProMotion display, the powerful A18 Pro Bionic chip, and an advanced triple-camera system for stunning photography. Built with a premium titanium frame and equipped with a long-lasting 5000mAh battery, it's designed for those who demand the best.",
      warranty: "1 Year Official Warranty",
    },

    // Add the rest of your products here...

    {
      id: 5,
      name: "iPhone 15",
      brand: "Apple",
      price: ["95000৳", "105000৳", "120000৳"],
      oldPrice: ["100000৳", "110000৳", "125000৳"],
      image: "/img/ip 15 black.png",
      images: [
        "/img/ip 15 black.png",
        "/img/ip 15 blue.png",
        "/img/ip 15 green.png",
        "/img/ip 15 pink.png",
      ],
      model: {
        phoneName: "iPhone 15",
        GB: "128GB",
        color: "Black",
      },
      stock: "out-of-stock",
      colors: ["black", "blue", "green", "pink"],
      storages: ["128GB", "256GB", "512GB"],

      specifications: {
        screenSize: "6.1 inches",
        processor: "A16 Bionic",
        ram: "6GB",
        battery: "3877mAh",
        camera: "48MP + 12MP Dual Rear, 12MP Front",
        displayType: "Super Retina XDR",
        refreshRate: "60Hz",
      },

      description:
        "The iPhone 15 features a 6.1-inch Super Retina XDR display, powered by the A16 Bionic chip for seamless performance. It comes with a powerful 48MP dual-camera system, allowing for high-quality photography. With a long-lasting 3877mAh battery and elegant color options, it's the perfect everyday device.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 6,
      name: "iPhone 15 Plus",
      brand: "Apple",
      price: ["105000৳", "115000৳", "130000৳"],
      oldPrice: ["110000৳", "120000৳", "135000৳"],
      image: "/img/ip 15 plus green.png",
      images: [
        "/img/ip 15 plus green.png",
        "/img/ip 15 plus blue.png",
        "/img/ip 15 plus black.png",
        "/img/ip 15 plus pink.png",
        "/img/ip 15 plus yellow.png",
      ],
      model: {
        phoneName: "iPhone 15 Plus",
        GB: "128GB",
        color: "green",
      },
      stock: "in-stock",
      colors: ["green", "blue", "black", "pink", "yellow"],
      storages: ["128GB", "256GB", "512GB"],

      specifications: {
        screenSize: "6.7 inches",
        processor: "A16 Bionic",
        ram: "6GB",
        battery: "4383mAh",
        camera: "48MP + 12MP Dual Rear, 12MP Front",
        displayType: "Super Retina XDR",
        refreshRate: "60Hz",
      },

      description:
        "The iPhone 15 Plus features a large 6.7-inch Super Retina XDR display, powered by the A16 Bionic chip for seamless performance. It boasts a 48MP dual-camera system, offering high-quality photography and video recording. With a long-lasting 4383mAh battery and a range of vibrant color options, it's perfect for those who love big screens and powerful performance.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 7,
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: ["135000৳", "145000৳", "160000৳", "175000৳"],
      oldPrice: ["145000৳", "155000৳", "170000৳", "180000৳"],
      image: "/img/ip 15 pro natural titanium.png",
      images: [
        "/img/ip 15 pro natural titanium.png",
        "/img/ip 15 pro black titanium.png",
        "/img/ip 15 pro blue titanium.png",
        "/img/ip 15 pro white titanium.png",
      ],
      model: {
        phoneName: "iPhone 15 Pro",
        GB: "128GB",
        color: "natural",
      },
      stock: "in-stock",
      colors: ["natural", "black", "blue", "white"],
      storages: ["128GB", "256GB", "512GB", "1TB"],

      specifications: {
        screenSize: "6.1 inches",
        processor: "A17 Pro",
        ram: "8GB",
        battery: "4323mAh",
        camera: "48MP + 12MP Dual Rear, 12MP Front",
        displayType: "Super Retina XDR",
        refreshRate: "120Hz",
      },

      description:
        "The iPhone 15 Pro features a stunning 6.1-inch Super Retina XDR display, powered by the A17 Pro chip, offering an incredible performance boost. Its 48MP dual-camera system enables top-tier photography and video quality. With an all-day battery life and 120Hz refresh rate, it’s designed for demanding users who need power and efficiency.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 8,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: ["220000৳", "230000৳", "240000৳", "250000৳"],
      oldPrice: ["225000৳", "235000৳", "245000৳", "255000৳"],
      image: "/img/sg gray.png",
      images: [
        "/img/sg gray.png",
        "/img/sg black.png",
        "/img/sg violet.png",
        "/img/sg blue.png",
      ],
      model: {
        phoneName: "Galaxy S24 Ultra",
        GB: "256GB",
        color: "Titanium Gray",
      },
      stock: "in-stock",
      colors: ["Titanium Gray", "Black", "Violet", "Blue"],
      storages: ["256GB", "512GB", "1TB"],
      specifications: {
        screenSize: "6.8 inches",
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        battery: "5000mAh",
        camera: "200MP + 50MP + 10MP + 12MP Rear, 12MP Front",
        displayType: "Dynamic AMOLED 2X",
        refreshRate: "120Hz",
      },
      description:
        "The Galaxy S24 Ultra features a powerful Snapdragon 8 Gen 3 chip, a 200MP quad-camera system, and a stunning 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate, designed to provide an immersive viewing experience.",
      warranty: "1 Year Official Warranty",
    },

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

    {
      id: 11,
      name: "Samsung Galaxy Z Fold 5",
      brand: "Samsung",
      price: ["220000৳", "230000৳", "240000৳"],
      oldPrice: ["225000৳", "235000৳", "245000৳"],
      image: "/img/gz black.png",
      images: ["/img/gz black.png", "/img/gz cream.png", "/img/gz blue.png"],
      model: {
        phoneName: "Galaxy Z Fold 5",
        GB: "512GB",
        color: "Black",
      },
      stock: "in-stock",
      colors: ["Black", "Cream", "Blue"],
      storages: ["256GB", "512GB", "1TB"],
      specifications: {
        screenSize: "7.6 inches (Foldable)",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        battery: "4400mAh",
        camera: "50MP + 12MP + 10MP Rear, 10MP + 4MP Front",
      },
      description:
        "The Galaxy Z Fold 5 offers an innovative foldable experience with a 7.6-inch Dynamic AMOLED display, S Pen support, and powerful performance.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 12,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      price: ["110000৳", "120000৳", "130000৳"],
      oldPrice: ["120000৳", "130000৳", "140000৳"],
      image: "/img/gp blue.png",
      images: ["/img/gp blue.png", "/img/gp black.png", "/img/gp white.png"],
      model: {
        phoneName: "Google Pixel 8 Pro",
        GB: "512GB",
        color: "Blue",
      },
      stock: "in-stock",
      colors: ["Blue", "Black", "White"],
      storages: ["128GB", "256GB", "512GB"],
      specifications: {
        screenSize: "6.7 inches",
        processor: "Google Tensor G3",
        ram: "12GB",
        battery: "5050mAh",
        camera: "50MP + 48MP + 48MP Rear, 10.5MP Front",
      },
      description:
        "Google Pixel 8 Pro offers an AI-powered camera system, a premium 6.7-inch LTPO OLED display, and the latest Google Tensor G3 processor for top-tier performance.",
      warranty: "1 Year Official Warranty",
    },

    {
      id: 13,
      name: "Oppo Reno 11 Pro",
      brand: "Oppo",
      price: ["75000৳", "80000৳", "85000৳"],
      oldPrice: ["80000৳", "85000৳", "90000৳"],
      image: "/img/or1.jpg",
      images: ["/img/or1.jpg", "/img/or blue.png", "/img/or silver.png"],
      model: {
        phoneName: "Oppo Reno 11 Pro",
        GB: "256GB",
        color: "Black",
      },
      stock: "in-stock",
      colors: ["Black", "Blue", "Silver"],
      storages: ["128GB", "256GB"],
      specifications: {
        screenSize: "6.74 inches",
        processor: "Snapdragon 8+ Gen 1",
        ram: "12GB",
        battery: "4600mAh",
        camera: "50MP + 32MP + 8MP Rear, 32MP Front",
      },
      description:
        "Oppo Reno 11 Pro is designed for photography enthusiasts, featuring an ultra-clear 50MP main camera, a powerful processor, and a stylish design.",
      warranty: "1 Year Official Warranty",
    },

    // Your other product data...
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -170;
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

    scrollToProductsContainer();
    setLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (currentPage !== 1) {
      scrollToProductsContainer();
    }
  }, [currentPage]);

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
      <h2>Featured Products</h2>
      {loading && <div className="loading-spinner"></div>}

      <div
        className={`product-grid ${loading ? "loading" : ""}`}
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

      {products.length > itemsPerPage && (
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

export default Products;
