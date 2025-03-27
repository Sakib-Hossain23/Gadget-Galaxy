import React from "react";
import "../assets/styles/Fr.css";

const Fr = () => {
  return (
    <div className="frc">
      <div className="fr-container">
        <div className="customer-support">
          <h3>Customer Support</h3>
          <div className="phone-box">
            <i className="fas fa-phone-alt"></i>
            <span>+8800000000000</span>
          </div>
          <div className="store-location-box">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <small>Store Locator</small>
              <span>Find Our Stores</span>
            </div>
          </div>
          <div className="social-media-links">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="app-download-links">
            <img src="/img/google play.jpg" alt="Google Play" />
            <img src="/img/app store.jpg" alt="App Store" />
          </div>
        </div>

        <div className="locations">
          <h3>Company Info</h3>

          <small>Shop Address</small>
          <br />
          <small>Careers</small>
          <br />
          <small>Blog</small>
          <br />
          <small>Press Coverage</small>
          <br />
          <small>Order Tracking</small>
          <br />
          <small>Complaints / Advice</small>
        </div>

        <div className="locations">
          <h3>Customer Help</h3>

          <small>FAQs</small>
          <br />
          <small>EMI and Payment Policy</small>
          <br />
          <small>Privacy Policy</small>
          <br />
          <small>Warranty Policy</small>
          <br />
          <small>Exchange Any Device</small>
          <br />
          <small>Delivery Terms & Conditions</small>
          <br />
          <small>Pre-Order Policy</small>
        </div>

        <div className="locations">
          <h3>Our Locations</h3>

          <small>Basement 1, Shop 2, </small>
          <br />
          <small>Level 2, Block A, Shop 4-5</small>
          <br />
          <small>Level-3, Block-B, Shop-7, 8, 9</small>
          <br />
          <small>Level 4, Zone C (West Court) </small>
          <br />
          <small>Level 5, Shop 10</small>
          <br />
          <p>
            Email: <span>example@gadgetsstore.com</span>
          </p>
        </div>
      </div>
      <div className="fr-bottom">
        <p>© 2025 GoGadget | All rights reserved</p>
      </div>
    </div>
  );
};

export default Fr;
