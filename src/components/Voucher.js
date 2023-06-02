import React from "react";
import "./Voucher.css";

const LandingPage = () => {
  const chartData = [
    { ageGroup: "18-24", percentage: 20 },
    { ageGroup: "25-34", percentage: 30 },
    { ageGroup: "35-44", percentage: 25 },
    { ageGroup: "45-54", percentage: 15 },
    { ageGroup: "55+", percentage: 10 }
  ];

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
                <button>Purchase Ads</button>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-content">
                <h3>Audience Demographics</h3>
                <p>Summarized audience data.</p>
                <h4>Gender & Age</h4>
                <div className="bar-chart">
                  {chartData.map((data) => (
                    <div key={data.ageGroup} className="bar">
                      <div className="bar-label">{data.ageGroup}</div>
                      <div
                        className="bar-fill"
                        style={{ height: `${data.percentage}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <h4>Top Country</h4>
                <p>United Kingdom 90%</p>
                <h4>Top City</h4>
                <p>London 90%</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="feature-container">
            <div className="feature-box">
              <div className="feature-content">
                <h3>5 minutes video Ads Voucher</h3>
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
                    <li>5 mins Ads voucher </li>
                    <li>Valid once</li>
                  </ul>
                </p>
                <button>Purchase Ads</button>
              </div>
            </div>
          </div>
        </section>
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
