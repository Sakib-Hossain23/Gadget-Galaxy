import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="stars">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="not-found-content">
        <div className="number-container">
          <div className="number-4">4</div>
          <div className="number-0">
            <div className="planet"></div>
          </div>
          <div className="number-4">4</div>
        </div>

        <h1 className="title">Page Not Found</h1>
        <p className="message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="button-container">
          <button className="home-button" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
