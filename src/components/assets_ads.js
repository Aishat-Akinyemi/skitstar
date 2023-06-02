import React from "react";
import "./assets_ads.css";

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
                Wallet Address: <a href="https://example.com">0xB769...Fe42</a>
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
          <h3>Used Vouchers</h3>
        </section>
        <section>
          <div className="feature-container">
            <div className="feature-box">
              <div className="feature-content">
                <h3>2 minutes video Ads Voucher</h3>
                <h4>Description</h4>
                <p>
                  Drive-In Senja memberikan retro drive-in experience yang
                  dikemas secara modern. Penggunaan transmisi radio kit,
                  mengintegrasikan suara film ke dalam radio mobil,{" "}
                </p>
                <p>
                  Price <br /> 0.35 ETH
                </p>
                <p>
                  Value: Y
                  <ul>
                    <li>2 mins Ads voucher </li>
                    <li>Valid once</li>
                  </ul>
                </p>
                <button>Re-purchase Voucher</button>
              </div>
            </div>
          </div>
        </section>
        <hr className="line" />
        <section>
          <h3>New Vouchers</h3>
        </section>
        <section>
          <div className="feature-container">
            <div className="feature-box">
              <div className="feature-content">
                <h3>2 minutes video Ads Voucher</h3>
                <h4>Description</h4>
                <p>
                  Drive-In Senja memberikan retro drive-in experience yang
                  dikemas secara modern. Penggunaan transmisi radio kit,
                  mengintegrasikan suara film ke dalam radio mobil,{" "}
                </p>
                <p>
                  Price <br /> 0.35 ETH
                </p>
                <p>
                  Value: Y
                  <ul>
                    <li>2 mins Ads voucher </li>
                    <li>Valid once</li>
                  </ul>
                </p>
                <button>Re-purchase Voucher</button>
              </div>
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
