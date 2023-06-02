import React from "react";
import "./video_player.css";

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
      <div className="container">
        <div className="box">
          <div className="video-wrapper"></div>
          <div className="description">
            <p>Description</p>
            <div className="icons">⤵</div>
          </div>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Leo scelerisque
                    fames arcu penatibus. Purus elit donec gravida nullam nec
                    sit mauris ultricies. Diam mi orci arcu mollis ultricies
                    massa iaculis malesuada.
                  </p>
                  <p> SHOW MORE </p>
                </div>
              </div>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </section>
          <div className="comments">
            <div className="comment">
              <div className="poster-info">Jenny Wilson</div>
              <div className="comment-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Leo scelerisque fames
                  arcu penatibus. Purus elit donec gravida nullam nec sit mauris
                  ultricies. Diam mi orci arcu mollis ultricies massa iaculis
                  malesuada.
                </p>
                <div className="icons">👍 222 👎 4 REPLY</div>
              </div>
              <div className="replies"> 15 Replies</div>
            </div>
            <div className="comment">
              <div className="poster-info">Jenny Wilson</div>
              <div className="comment-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Leo scelerisque fames
                  arcu penatibus. Purus elit donec gravida nullam nec sit mauris
                  ultricies. Diam mi orci arcu mollis ultricies massa iaculis
                  malesuada.
                </p>
                <div className="icons">👍 222 👎 4 REPLY</div>
              </div>
              <div className="replies"> 15 Replies</div>
            </div>
            <div className="comment">
              <div className="poster-info">Jenny Wilson</div>
              <div className="comment-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Leo scelerisque fames
                  arcu penatibus. Purus elit donec gravida nullam nec sit mauris
                  ultricies. Diam mi orci arcu mollis ultricies massa iaculis
                  malesuada.
                </p>
                <div className="icons">👍 222 👎 4 REPLY</div>
              </div>
              <div className="replies"> 15 Replies</div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="video-wrapper-small"></div>
          <div className="description-small">
            <p>Description</p>
          </div>
          <div className="video-wrapper-small"></div>
          <div className="description-small">
            <p>Description</p>
          </div>
          <div className="video-wrapper-small"></div>
          <div className="description-small">
            <p>Description</p>
          </div>
          <div className="video-wrapper-small"></div>
          <div className="description-small">
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
