import React from "react";
import "./NFT.css";

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
        <section>
          <div className="feature-box">
            <div className="feature-image">
              <h3>Bluexy</h3>
              <h4>Current bid</h4>
              <h5>
                3.2 ETH <button> Place Bid</button>{" "}
              </h5>
            </div>
            <div className="feature-content">
              <h3>Description</h3>
              <p>
                Drive-In Senja memberikan retro drive-in experience yang dikemas
                secara modern. Penggunaan transmisi radio kit, mengintegrasikan
                suara film ke dalam radio mobil, ditambah proyektor resolusi
                tinggi yang menyediakan pengalaman visual terbaik. Acara ini
                merupakan sarana yang aman untuk menghabiskan waktu bersama
                keluarga, pasangan, maupun komunitas
              </p>
              <h3>Value</h3>
              <ul>
                <li>Access to all videos</li>
                <li>5 mins Ads voucher </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-box">
            <div className="feature-image">
              {/* Big Image */}
              <h3>Bluexy</h3>
              <h4>Current bid</h4>
              <h5>
                3.2 ETH <button> Place Bid</button>{" "}
              </h5>
            </div>
            <div className="feature-content">
              <h3>Description</h3>
              <p>
                Drive-In Senja memberikan retro drive-in experience yang dikemas
                secara modern. Penggunaan transmisi radio kit, mengintegrasikan
                suara film ke dalam radio mobil, ditambah proyektor resolusi
                tinggi yang menyediakan pengalaman visual terbaik. Acara ini
                merupakan sarana yang aman untuk menghabiskan waktu bersama
                keluarga, pasangan, maupun komunitas
              </p>
              <h3>Value</h3>
              <ul>
                <li>Access to all videos</li>
                <li>5 mins Ads voucher </li>
              </ul>
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
