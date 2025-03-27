import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = ({
  cart,
  searchQuery,
  setSearchQuery,
  setIsSearchModalOpen,
  setIsRegisterModalOpen,
}) => {
  // State for managing menu and dropdowns
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmartWatchDropdownOpen, setIsSmartWatchDropdownOpen] =
    useState(false);
  const [isSmartWatchSubDropdownOpen, setIsSmartWatchSubDropdownOpen] =
    useState(false);
  const [isCoverDropdownOpen, setIsCoverDropdownOpen] = useState(false);
  const [isCoverSubDropdownOpen, setIsCoverSubDropdownOpen] = useState(false);
  const [isLaptopDesktopDropdownOpen, setIsLaptopDesktopDropdownOpen] =
    useState(false);
  const [isLaptopDesktopSubDropdownOpen, setIsLaptopDesktopSubDropdownOpen] =
    useState(false);
  const [isPowerAccessoriesDropdownOpen, setIsPowerAccessoriesDropdownOpen] =
    useState(false);
  const [
    isPowerAccessoriesSubDropdownOpen,
    setIsPowerAccessoriesSubDropdownOpen,
  ] = useState(false);

  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close all dropdowns and menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsSmartWatchDropdownOpen(false);
    setIsSmartWatchSubDropdownOpen(false);
    setIsCoverDropdownOpen(false);
    setIsCoverSubDropdownOpen(false);
    setIsLaptopDesktopDropdownOpen(false);
    setIsLaptopDesktopSubDropdownOpen(false);
    setIsPowerAccessoriesDropdownOpen(false);
    setIsPowerAccessoriesSubDropdownOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchModalOpen(true);
  };

  // Handle search on Enter key press
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      setIsSearchModalOpen(true);
    }
  };

  // Handle user icon click
  const handleUserClick = () => {
    setIsRegisterModalOpen(true);
  };

  // Prevent default link behavior
  const preventDefaultLink = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      {/* Top section of the navbar */}
      <div className="navbar-top">
        {/* Logo section */}
        <Link
          to="/"
          className="footer-button"
          onClick={() => {
            closeAllMenus();
            window.scrollTo(0, 0);
          }}
        >
          <div className="navbar-logo">
            <h1 style={{ color: "#fff" }}>
              Gadget<span style={{ color: "orange" }}>s</span>
            </h1>

            <p>GoGadget Store</p>
          </div>
        </Link>

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleSearchKeyPress}
          />
          <button onClick={() => setIsSearchModalOpen(true)}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Icons section */}
        <div className="navbar-icons">
          {/* Home button */}
          <div className="navbar-item">
            <Link
              to="/"
              className="footer-button"
              onClick={() => window.scrollTo(0, 0)}
            >
              <button
                className="btn btn-md-square rounded-circle d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor: "#7B68B1",
                  width: "47px",
                  height: "47px",
                }}
              >
                <i className="fas fa-home text-white"></i>
                <span
                  className="text-white"
                  style={{
                    fontSize: "9px",
                    marginTop: "-4px",
                    marginBottom: "-3px",
                  }}
                >
                  Home
                </span>
              </button>
            </Link>
          </div>

          {/* Cart button */}
          <div className="navbar-item">
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
                style={{
                  fontSize: "9px",
                  marginTop: "-4px",
                  marginBottom: "-3px",
                }}
              >
                Cart
              </span>
            </button>
          </div>

          <div className="navbar-item">
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
                  style={{
                    fontSize: "9px",
                    marginTop: "-4px",
                    marginBottom: "-3px",
                  }}
                >
                  Blog
                </span>
              </button>
            </Link>
          </div>

          {/* Phone button */}
          <div className="navbar-item">
            <a href="tel:+8801799999999" style={{ textDecoration: "none" }}>
              <button
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#7B68B1",
                  color: "#fff",
                  padding: "-1px 15px",
                  borderRadius: "9px",
                  fontSize: "1rem",
                  gap: "8px",
                  border: "none",
                }}
              >
                <i className="fas fa-phone-alt"></i>
                +8800000000000
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="menu-button" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Bottom section of the navbar (dropdowns) */}
      <div className={`navbar-bottom ${isOpen ? "menu-open" : ""}`}>
        <ul>
          {/* Phones & Tablets Dropdown */}
          <li
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onMouseEnter={preventDefaultLink}>
              Phones & Tablets <i className="fas fa-caret-down"></i>
            </Link>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsSmartWatchSubDropdownOpen(true)}
                  onMouseLeave={() => setIsSmartWatchSubDropdownOpen(false)}
                >
                  <Link to="/notfound">
                    Smartphones <i className="fas fa-caret-right"></i>
                  </Link>
                  {isSmartWatchSubDropdownOpen && (
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          iPhone
                        </Link>
                      </li>
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          Samsung
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Accessories
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Laptop & Desktop Dropdown */}
          <li
            onMouseEnter={() => setIsLaptopDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsLaptopDesktopDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onMouseEnter={preventDefaultLink}>
              Laptop & Desktop <i className="fas fa-caret-down"></i>
            </Link>
            {isLaptopDesktopDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsLaptopDesktopSubDropdownOpen(true)}
                  onMouseLeave={() => setIsLaptopDesktopSubDropdownOpen(false)}
                >
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Laptops <i className="fas fa-caret-right"></i>
                  </Link>
                  {isLaptopDesktopSubDropdownOpen && (
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          MacBook
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Desktops
                  </Link>
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Monitors
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Smart Watch Dropdown */}
          <li
            onMouseEnter={() => setIsSmartWatchDropdownOpen(true)}
            onMouseLeave={() => setIsSmartWatchDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onMouseEnter={preventDefaultLink}>
              Smart Watch <i className="fas fa-caret-down"></i>
            </Link>
            {isSmartWatchDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsSmartWatchSubDropdownOpen(true)}
                  onMouseLeave={() => setIsSmartWatchSubDropdownOpen(false)}
                >
                  <Link to="/notfound">
                    Smart Watches <i className="fas fa-caret-right"></i>
                  </Link>
                  {isSmartWatchSubDropdownOpen && (
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          Apple Watch
                        </Link>
                      </li>
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          Samsung Galaxy Watch
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Fitness Bands
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Cover & Glass Dropdown */}
          <li
            onMouseEnter={() => setIsCoverDropdownOpen(true)}
            onMouseLeave={() => setIsCoverDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onMouseEnter={preventDefaultLink}>
              Cover & Glass <i className="fas fa-caret-down"></i>
            </Link>
            {isCoverDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsCoverSubDropdownOpen(true)}
                  onMouseLeave={() => setIsCoverSubDropdownOpen(false)}
                >
                  <Link to="/notfound">
                    Phone Cases <i className="fas fa-caret-right"></i>
                  </Link>
                  {isCoverSubDropdownOpen && (
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          iPhone Cases
                        </Link>
                      </li>
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          Samsung Cases
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Screen Protectors
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Power & Accessories Dropdown */}
          <li
            onMouseEnter={() => setIsPowerAccessoriesDropdownOpen(true)}
            onMouseLeave={() => setIsPowerAccessoriesDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onMouseEnter={preventDefaultLink}>
              Power & Accessories <i className="fas fa-caret-down"></i>
            </Link>

            {isPowerAccessoriesDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() =>
                    setIsPowerAccessoriesSubDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    setIsPowerAccessoriesSubDropdownOpen(false)
                  }
                >
                  <Link to="/notfound">
                    Chargers <i className="fas fa-caret-right"></i>
                  </Link>

                  {isPowerAccessoriesSubDropdownOpen && (
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          USB-C Chargers
                        </Link>
                      </li>
                      <li>
                        <Link to="/notfound" onClick={closeAllMenus}>
                          Wireless Chargers
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Batteries
                  </Link>
                </li>
                <li>
                  <Link to="/notfound" onClick={closeAllMenus}>
                    Cables
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Pre-Owned link */}
          <li>
            <Link to="/notfound" onClick={closeAllMenus}>
              Pre-Owned
            </Link>
          </li>

          {/* Blog link */}
          <li>
            <Link to="/blog" onClick={closeAllMenus}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
