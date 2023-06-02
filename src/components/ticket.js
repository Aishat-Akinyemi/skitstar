import React from "react";
import "./ticket.css";

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
        <div className="big-image"></div>
        <div className="boxes-container">
          <div className="box">
            <h2>TGLZ Comedy Night</h2>
            <p>Kit Kat Club, London @ Alam Sutera</p>
            <p>December 25, 2023</p>
            <h3>Description</h3>
            <p>
              Drive-In Senja memberikan retro drive-in experience yang dikemas
              secara modern. Penggunaan transmisi radio kit, mengintegrasikan
              suara film ke dalam radio mobil, ditambah proyektor resolusi
              tinggi yang menyediakan pengalaman visual terbaik. Acara ini
              merupakan sarana yang aman untuk menghabiskan waktu bersama
              keluarga, pasangan, maupun komunitas
            </p>
          </div>
          <div className="box">
            <h2>0.35 ETH</h2>
            <h3>Gas fee: 0.003eth</h3>
            <div className="select-tickets">
              <button>Mint Event Ticket</button>
            </div>
          </div>
        </div>
        <div className="info-section">
          <h2>Event Information</h2>
          <div className="section">
            <div className="subsection">
              <h3>Duration </h3>
              <p>
                20.00 - 21.56 WIB <br /> 1 hour 56 minutes
              </p>
            </div>
            <div className="subsection">
              <h3>Audience</h3>
              <p>This movie is suitable for audience aged 12 and above</p>
            </div>
            <div className="subsection">
              <h3>Attention</h3>
              <p>Your NFT is the verified means of identification</p>
            </div>
          </div>
          <div className="terms">
            <h3>Terms & Conditions ^ </h3>
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
