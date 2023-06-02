import React from "react";
import "./assets.css";

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <div className="company-name">SkitStars</div>
        </div>
        <div className="navigation">
          <ul>
            <li>Our Mission</li>
            <li>FAQ</li>
            <li>Become a Creator</li>
          </ul>
        </div>
        <div className="right-section">
          <i className="bell-icon"></i>
          <button className="connect-wallet-button">Connect Wallet</button>
        </div>
      </header>

      <section>
        <ul>
          <h3>Home</h3>
          <h3>Subscriptions</h3>
          <h3>Assets</h3>
          <h3>History</h3>
          <h3>Settings</h3>
          <h3>Help</h3>
        </ul>
      </section>

      <section>
        <div className="heade">
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="profile-image.jpg"
                alt="Profile"
                className="profile-image"
              />
            </div>
            <div className="channel-details">
              <div className="wallet-address">
                Wallet Address: <a href="https://example.com">0xB769...Fe2</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="tabs">
          <button>Tickets</button>
          <button>NFTs</button>
          <button>ADs Voucher</button>
        </div>
        <hr className="line" />
        <div className="search-bar">
          <input type="text" placeholder="Search Tickets" />
        </div>
        <section>
          <div className="ticket-row">
            <div className="ticket-box">
              <div className="ticket-thumbnail"></div>
              <div className="ticket-description"></div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-media">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
