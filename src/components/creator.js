import React from "react";
import "./creator.css";

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
        <div className="header">
          <div className="profile-section">
            <img
              src="profile-image.jpg"
              alt="Profile"
              className="profile-image"
            />
            <div className="channel-details">
              <h2>The Good Laugh Zone (TGLZ)</h2>
              <div className="subscribers">20M Subscribers | 2k posts</div>
              <div className="wallet-address">
                Wallet Address: 0xB769...Fe42
              </div>
            </div>
          </div>
          <button className="subscribe-button">Subscribe</button>
        </div>

        <div className="tabs">
          <button>About</button>
          <button>Videos</button>
          <button>Events</button>
          <button>NFTs</button>
          <button>ADs Voucher</button>
        </div>
        <hr className="line" />
        <div className="details-box">
          <h3>Description</h3>
          <p>
            Introducing The Good Laugh Zone, a comedy company that specializes
            in bringing joy and laughter to audiences around the world. With a
            team of talented comedians, writers, and producers, The Good Laugh
            Zone is dedicated to creating high-quality content that will leave
            you in stitches. Whether you're looking for stand-up comedy, sketch
            comedy, improv, or parody, The Good Laugh Zone has it all. So sit
            back, relax, and get ready to laugh with The Good Laugh Zone.
          </p>
          <div className="url">
            Website: <a href="https://example.com">thegoodlaughzone.com</a>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
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
    </div>
  );
};

export default LandingPage;
