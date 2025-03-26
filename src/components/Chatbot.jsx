import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "../assets/styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "+8801753847196";
  const message = encodeURIComponent(
    "Hello, I am interested in Gadget Galaxy!"
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getWhatsAppUrl = () => {
    const baseUrl = isMobile
      ? "https://api.whatsapp.com"
      : "https://web.whatsapp.com";
    return `${baseUrl}/send?phone=${phoneNumber}&text=${message}`;
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Button */}
      <button className="chat-toggle" onClick={() => setIsOpen(true)}>
        <span className="online-status"></span>
        <div className="chat-icon-wrapper">
          <FaWhatsapp className="chat-icon" />
        </div>
      </button>

      {isOpen && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <span>WhatsApp Chat</span>
            <FaTimes className="close-btn" onClick={() => setIsOpen(false)} />
          </div>
          <div className="chat-body">
            <p>Start a chat on WhatsApp:</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#009d56",
                fontSize: "18px",
                fontWeight: "400",
              }}
              className="whatsapp-link"
              onClick={() => setIsOpen(false)}
            >
              Chat Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
