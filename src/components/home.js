import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <div className="company-name">SkitStars</div>
      </div>
      <div className="nav-links">
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
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul className="sidebar-links">
        <li className="active">Home</li>
        <li>Subscriptions</li>
        <li>Assets</li>
        <li>History</li>
        <li>Settings</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="app-container">
      <div className="details-page">
        <NavBar />
        <div className="content-wrapper">
          <LeftSidebar />
          <div className="right-sections">
            <div className="tabs">
              <button>All</button>
              <button>Musical</button>
              <button>Satire</button>
              <button>Parody</button>
              <button>Comedy</button>
              <button>Parody</button>
              <button>Sketch</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search Creators" />
            </div>

            <section>
              <h3>Trending Videos</h3>
            </section>

            <section>
              <div className="video-row">
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
              </div>
            </section>
            <hr className="line" />
            <section>
              <div className="video-row">
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
              </div>
            </section>
            <section>
              <div className="video-row">
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
                <div className="video-box">
                  <div className="video-thumbnail"></div>
                  <div className="video-description">Video Description</div>
                </div>
              </div>
            </section>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default LandingPage;
