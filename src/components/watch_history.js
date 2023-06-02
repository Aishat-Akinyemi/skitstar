import React from "react";
import "./watch_history.css";

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
        <div className="search-bar">
          <input type="text" placeholder="Search Watch History" />
        </div>
      </section>
      <section>
        <h1>Watch History Delete All</h1>
      </section>
      <section>
        <h3>Today</h3>
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
        <h3>Yesterday</h3>
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
        <h3>This Week</h3>
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
        <h3>This Month</h3>
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
        <h3>Older</h3>
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
  );
};

export default LandingPage;
