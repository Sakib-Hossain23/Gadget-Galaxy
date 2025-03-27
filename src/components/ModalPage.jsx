import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/ModalPage.css";

const colorMap = {
  "Desert Titanium": "#D2B48C",
  "Natural Titanium": "#B0A999",
  "White Titanium": "#FFFFFF",
  "Black Titanium": "#1C1C1C",
  "Gray Titanium": "#A0A0A0",
  "Blue Titanium": "#4A90E2",
  "Green Titanium": "#3A6F41",
  "Red Titanium": "#B22222",
  "Purple Titanium": "#6A0DAD",
  "Bronze Titanium": "#CD7F32",
  "Silver Titanium": "#C0C0C0",
  "Gold Titanium": "#FFD700",
  "Rose Gold Titanium": "#B76E79",
  "Copper Titanium": "#B87333",
  "Dark Gray Titanium": "#505050",
  "Light Gray Titanium": "#D3D3D3",
  "Charcoal Titanium": "#36454F",
  "Steel Blue Titanium": "#4682B4",
  "Midnight Blue Titanium": "#191970",
  "Olive Titanium": "#808000",
  "Teal Titanium": "#008080",
  "Cyan Titanium": "#00FFFF",
  "Magenta Titanium": "#FF00FF",
  "Lavender Titanium": "#E6E6FA",
  "Beige Titanium": "#F5F5DC",
  "Ivory Titanium": "#FFFFF0",
  "Mustard Titanium": "#FFDB58",
  "Sunset Orange Titanium": "#FF4500",
  "Deep Sea Blue Titanium": "#003366",
  Red: "#FF0000",
  Green: "#008000",
  Blue: "#0000FF",
  Yellow: "#FFFF00",
  Cyan: "#00FFFF",
  Magenta: "#FF00FF",
  Orange: "#FFA500",
  Pink: "#FFC0CB",
  Purple: "#800080",
  Brown: "#A52A2A",
  Gray: "#808080",
  Black: "#000000",
  White: "#FFFFFF",
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  Beige: "#F5F5DC",
  Maroon: "#800000",
  Navy: "#000080",
  Olive: "#808000",
  Teal: "#008080",
  Lime: "#00FF00",
  Indigo: "#4B0082",
  Violet: "#EE82EE",
  Turquoise: "#40E0D0",
  Coral: "#FF7F50",
  Salmon: "#FA8072",
  Chocolate: "#D2691E",
  Plum: "#DDA0DD",
  Crimson: "#DC143C",
  "Sky Blue": "#87CEEB",
  "Royal Blue": "#4169E1",
  "Forest Green": "#228B22",
  "Dark Green": "#006400",
  "Deep Pink": "#FF1493",
  "Hot Pink": "#FF69B4",
  "Dodger Blue": "#1E90FF",
  Tomato: "#FF6347",
  "Slate Gray": "#708090",
  "Light Gray": "#D3D3D3",
  "Dark Gray": "#A9A9A9",
  Cream: "#FFFDD0",
  Lavender: "#E6E6FA",
  "Phantom Gray": "#383B3E",
  "Titan Black": "#1C1C1C",
  "Eternal Green": "#1F3D2B",
  "Ceramic White": "#F5F5F1",
  "Flora Green": "#5FA777",
};

const ModalPage = ({ addToCart, products }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const productFromState = location.state?.product;

  // Find product from products array if not in location state
  const product =
    productFromState || products.find((p) => p.id === parseInt(id));

  // State declarations
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize product data and states
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      setSelectedColor(null);
      setSelectedStorage(null);
      setCurrentPrice(product.price?.[0] || 0);
      setOldPrice(product.oldPrice?.[0] || null);

      const hasSpecifications =
        product.specifications &&
        Object.keys(product.specifications).length > 0;
      setActiveTab(hasSpecifications ? "specifications" : "description");

      if (product.colors?.length === 1) {
        setSelectedColor(product.colors[0]);
      }
      if (product.storages?.length === 1) {
        setSelectedStorage(product.storages[0]);
        setCurrentPrice(product.price?.[0] || 0);
        setOldPrice(product.oldPrice?.[0] || null);
      }

      setWhatsAppMessage(
        `Hi, I'm interested in the ${product.name}.Can you tell me more about it?`
      );
    }
  }, [product, id]);

  // Update selected image based on color
  useEffect(() => {
    if (selectedColor && product?.images) {
      const colorIndex = product.colors.indexOf(selectedColor);
      if (colorIndex !== -1 && product.images[colorIndex]) {
        setSelectedImage(product.images[colorIndex]);
      }
    }
  }, [selectedColor, product]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801753847196";
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!product) {
    return (
      <div className="modal-page-container">
        <p>Product not found. Please go back.</p>
      </div>
    );
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increment") {
      setQuantity(quantity + 1);
    }
  };

  const handleStorageClick = (storage, index) => {
    setSelectedStorage(storage);
    setCurrentPrice(product.price?.[index] || 0);
    setOldPrice(product.oldPrice?.[index] || null);
  };

  const handleAddToCart = () => {
    const finalColor =
      product.colors?.length === 1 ? product.colors[0] : selectedColor;
    const finalStorage =
      product.storages?.length === 1 ? product.storages[0] : selectedStorage;

    if (
      (product.colors?.length > 1 && !finalColor) ||
      (product.storages?.length > 1 && !finalStorage)
    ) {
      setAlertMessage("Please select variations");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedColor: finalColor,
      selectedStorage: finalStorage,
      image: selectedImage,
      price: currentPrice,
      oldPrice: oldPrice,
    });
    setAlertMessage("Successfully added product");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 4000);
  };

  const handleBuyNow = () => {
    const finalColor =
      product.colors?.length === 1 ? product.colors[0] : selectedColor;
    const finalStorage =
      product.storages?.length === 1 ? product.storages[0] : selectedStorage;

    if (
      (product.colors?.length > 1 && !finalColor) ||
      (product.storages?.length > 1 && !finalStorage)
    ) {
      setAlertMessage("Please select variations");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 4000);
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedColor: finalColor,
      selectedStorage: finalStorage,
      image: selectedImage,
      price: currentPrice,
      oldPrice: oldPrice,
    });

    navigate("/cart", {
      state: {
        product: {
          ...product,
          quantity,
          selectedColor: finalColor,
          selectedStorage: finalStorage,
          image: selectedImage,
          price: currentPrice,
          oldPrice: oldPrice,
        },
      },
    });
  };

  const handleOutOfStockClick = () => {
    setAlertMessage("This product is currently out of stock");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 5000);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Define available tabs based on data
  const availableTabs = [];
  if (
    product.specifications &&
    Object.keys(product.specifications).length > 0
  ) {
    availableTabs.push("specifications");
  }
  if (product.description) {
    availableTabs.push("description");
  }
  if (product.warranty) {
    availableTabs.push("warranty");
  }

  return (
    <div className="modal-page-container">
      <div className="content-wrapper">
        {/* Left Section: Product Image */}
        <div className="left-section">
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="main-image"
          />
          <div className="thumbnails">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={selectedImage === image ? "selected" : ""}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="right-section">
          <h2 style={{ textAlign: "start" }} className="color">
            {product.name}
          </h2>
          <p
            className="price color"
            style={{ marginTop: "16px", marginBottom: "-6px" }}
          >
            {currentPrice}
            {oldPrice && (
              <span
                className="old-price color"
                style={{ display: oldPrice ? "inline" : "none" }}
              >
                {oldPrice}
              </span>
            )}
          </p>
          <p
            className={`stock-status ${product.stock}`}
            style={{ fontSize: "14px" }}
          >
            Status:{" "}
            <span
              style={{
                color: product.stock === "in-stock" ? "#28A745" : "red",
                fontWeight: "bold",
                lineHeight: "3",
                fontSize: "14px",
              }}
            >
              {product.stock === "in-stock" ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          {/* WhatsApp Chat Button */}
          <div
            className={`whatsapp-chat-container ${
              showWhatsAppChat ? "expanded" : ""
            }`}
            onClick={() => !showWhatsAppChat && setShowWhatsAppChat(true)}
          >
            {showWhatsAppChat ? (
              <div className="whatsapp-chat-box">
                <div className="whatsapp-header">
                  <div className="whatsapp-info">
                    <div>
                      <h4>WhatsApp Support</h4>
                      <p>Typically replies within minutes</p>
                    </div>
                  </div>
                  <button
                    className="close-chat"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowWhatsAppChat(false);
                    }}
                  >
                    ×
                  </button>
                </div>
                <div className="whatsapp-message-box">
                  <textarea
                    value={whatsAppMessage}
                    onChange={(e) => setWhatsAppMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                </div>
                <button
                  className="send-whatsapp-buttonn"
                  onClick={handleWhatsAppClick}
                >
                  {isMobile ? "Open WhatsApp" : "Open WhatsApp"}
                </button>
              </div>
            ) : (
              <div className="whatsapp-buttonn">
                {isMobile ? "Message on WhatsApp" : "Message on WhatsApp"}
              </div>
            )}
          </div>

          {/* Colors Section */}
          {product.colors?.length > 0 && (
            <div className="options">
              <p className="color">
                <strong>Colors ({product.colors.length}):</strong>
              </p>
              <div className="color-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`option-button ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span
                      className="color-circle"
                      style={{
                        backgroundColor: colorMap[color] || color.toLowerCase(),
                      }}
                    ></span>
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Storage Section */}
          {product.storages?.length > 0 && (
            <div className="options">
              <p className="color">
                <strong>Storage:</strong>
              </p>
              {product.storages.map((storage, index) => (
                <button
                  key={storage}
                  className={`option-button ${
                    selectedStorage === storage ? "selected" : ""
                  }`}
                  onClick={() => handleStorageClick(storage, index)}
                >
                  {storage}
                </button>
              ))}
            </div>
          )}

          {/* Quantity Controls */}
          <div
            style={{
              marginTop: "12px",
              marginBottom: "8px",
              marginLeft: "8px",
            }}
            className="quantity-controls"
          >
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="quantity-button"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="quantity-button"
            >
              +
            </button>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <button
            className={`buy-button ${
              product.stock === "out-of-stock" ? "out-of-stock" : ""
            }`}
            onClick={
              product.stock === "in-stock"
                ? handleAddToCart
                : handleOutOfStockClick
            }
            style={{
              cursor:
                product.stock === "out-of-stock" ? "not-allowed" : "pointer",
            }}
          >
            {product.stock === "in-stock" ? "Add to Cart" : "Out of Stock"}
          </button>

          <button
            className={`buy-button buy-now-button ${
              product.stock === "out-of-stock" ? "out-of-stock" : ""
            }`}
            onClick={
              product.stock === "in-stock"
                ? handleBuyNow
                : handleOutOfStockClick
            }
            style={{
              cursor:
                product.stock === "out-of-stock" ? "not-allowed" : "pointer",
            }}
          >
            {product.stock === "in-stock" ? "Buy Now" : "Out of Stock"}
          </button>
        </div>

        {/* Tabbed Section */}
        <div className="tabs-container mt-5 w-full">
          <div className="tabs flex justify-around border-b pb-2">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 font-semibold capitalize tab-button ${
                  activeTab === tab ? "active" : "text-gray-500"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content p-4">
            {activeTab === "specifications" && (
              <div className="specifications-table">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-gray-300 text-left">
                        Specification
                      </th>
                      <th className="px-4 py-2 border border-gray-300 text-left">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.specifications || {}).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="px-4 py-2 border border-gray-300">
                            <strong>{key}:</strong>
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "description" && (
              <p style={{ color: "#4b5563" }} className="text-gray-700">
                {product.description || "No description available"}
              </p>
            )}
            {activeTab === "warranty" && (
              <p style={{ color: "#4b5563" }} className="text-gray-700">
                {product.warranty || "No warranty information available"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Success or Error Alert */}
      {alertVisible && (
        <div
          className={`custom-alert ${
            alertMessage === "Successfully added product" ||
            alertMessage === "Product is not available"
              ? alertMessage === "Successfully added product"
                ? "success-alert"
                : "error-alert"
              : "error-alert"
          }`}
        >
          <img
            className="alert-image"
            src={
              alertMessage === "Successfully added product"
                ? "../img/right.png"
                : "../img/red alert.png"
            }
            alt="Alert Icon"
          />
          <div className="alert-message">{alertMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ModalPage;
