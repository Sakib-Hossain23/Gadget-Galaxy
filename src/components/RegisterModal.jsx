import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Font Awesome icons
import "../assets/styles/RegisterModal.css";

const RegisterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for showing/hiding confirm password
  const [isLogin, setIsLogin] = useState(true); // Default to login form

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Signup validation
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signing up:", {
        firstName,
        lastName,
        phone,
        email,
        password,
      });
    } else {
      // Login validation
      console.log("Logging in:", { email, password });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div style={{ marginBottom: "13px" }} className="navbar-logo">
          <h1>
            gadget<span style={{ color: "orange" }}>s</span>
          </h1>
        </div>

        <div className="modal-toggle-buttons">
          <button
            className={`toggle-btn ${isLogin ? "" : "active"}`}
            onClick={() => setIsLogin(false)}
          >
            SIGNUP
          </button>
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                style={{ color: "#000", marginRight: "-4px" }}
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <button
                  style={{ color: "#000", marginRight: "-4px" }}
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle visibility
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          )}
          <button type="submit" className="modal-submit">
            {isLogin ? "LOGIN" : "SIGNUP"}
          </button>
          {!isLogin && (
            <span className="modal-agreement">
              By creating an account, you agree to the Gadgets.com{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Delivery Terms & Conditions</a>.
            </span>
          )}
          {isLogin && (
            <a href="#" className="modal-forgot-password">
              Forgot Password?
            </a>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
