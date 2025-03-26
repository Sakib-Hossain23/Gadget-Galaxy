import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/DownFooter.css";

const DownFooter = ({ cart, setIsRegisterModalOpen }) => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    setIsRegisterModalOpen(true); // Open RegisterModal when user icon is clicked
  };

  return (
    <footer>
      {/* Home Button */}
      <Link
        to="/"
        className="footer-button"
        onClick={() => window.scrollTo(0, 0)}
      >
        <button
          className="btn btn-md-square rounded-circle d-flex flex-column align-items-center justify-content-center"
          style={{ backgroundColor: "#7B68B1", width: "47px", height: "47px" }}
        >
          <i className="fas fa-home text-white"></i>
          <span
            className="text-white"
            style={{
              fontSize: "9px",
              marginTop: "2px",
              marginBottom: "-3.5px",
            }}
          >
            Home
          </span>
        </button>
      </Link>

      {/* Cart Button */}
      <button
        className="btn btn-md-square rounded-circle position-relative d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: "#7B68B1",
          marginLeft: "4px",
          color: "#fff",
          width: "47px",
          height: "47px",
        }}
        onClick={() => navigate("/cart")}
      >
        <i className="fas fa-shopping-cart"></i>

        <span
          className="badge bg-danger position-absolute"
          style={{
            top: "-9px",
            right: "-9px",
            fontSize: "0.6rem",
            padding: "0.2rem 0.4rem",
            minWidth: "1.5rem",
            textAlign: "center",
          }}
        >
          {cart.length}
        </span>

        <span
          className="text-white"
          style={{ fontSize: "9px", marginTop: "2px", marginBottom: "-5px" }}
        >
          Cart
        </span>
      </button>

      <Link to="/blog" style={{ textDecoration: "none" }}>
        <button
          className="btn btn-md-square rounded-circle d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: "#7B68B1",
            marginLeft: "4px",
            color: "#fff",
            width: "47px",
            height: "47px",
          }}
        >
          <i
            className="fas fa-blog text-white"
            style={{ fontSize: "17px", marginLeft: "6px" }}
          ></i>
          <span
            className="text-white"
            style={{ fontSize: "9px", marginTop: "2px", marginBottom: "-3px" }}
          >
            Blog
          </span>
        </button>
      </Link>

      {/* Phone button */}

      {/* Phone button */}
      <div className="navbar-item">
        <a href="tel:+8801799999999" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-md-square rounded-circle d-flex flex-column align-items-center justify-content-center"
            style={{
              backgroundColor: "#7B68B1",
              marginLeft: "4px",
              color: "#fff",
              width: "47px",
              height: "47px",
            }}
          >
            <i
              className="fas fa-phone-alt text-white"
              style={{ fontSize: "17px", marginLeft: "0px" }}
            ></i>
            <span
              className="text-white"
              style={{
                fontSize: "9px",
                marginTop: "-3px",
                marginBottom: "-6px",
              }}
            >
              Call
            </span>
          </button>
        </a>
      </div>
    </footer>
  );
};

export default DownFooter;
