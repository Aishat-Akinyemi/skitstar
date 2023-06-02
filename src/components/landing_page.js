import React from "react";
import "./landing_pge.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
      <section className="main-section">
        <div className="left-section">
          <h1>Embrace the Comedy Revolution</h1>
          <p>
            Watch, Laugh, and Unlock the Possibility to Buy Tickets, NFTs, and
            Ad Vouchers, Anytime, Anywhere
          </p>
          <button className="start-watching-button">Start Watching</button>
          <div className="stats">
            <div>
              <p>5000+ Comedians</p>
            </div>
            <div>
              <p>500+ Events</p>
            </div>
            <div>
              <p>5M+ Loyal Fans</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <iframe
            width="380"
            height="305"
            src="https://www.youtube.com/embed/pQgxiQAMTTo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="trending-videos">
        <h2 className="section-heading">Check out Trending Videos</h2>
        <div className="videos">
          <div className="video">
            <img src="video1-thumbnail.jpg" alt="" />
            <div className="video-info">
              <h3 className="video-title">
                TGIF Comedy series | A special Friday show
              </h3>
              <div className="creator">
                <img src="creator1-logo.png" alt="Creator 1 Logo" />
                <p className="creator-name">The Good Laugh Zone</p>
              </div>
            </div>
          </div>
          <div className="video">
            <img src="video2-thumbnail.jpg" alt="" />
            <div className="video-info">
              <h3 className="video-title">
                TGIF Comedy series | A special Friday show
              </h3>
              <div className="creator">
                <img src="creator2-logo.png" alt="Creator 2 Logo" />
                <p className="creator-name">The Good Laugh Zone</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="for-creators">
        <div className="container">
          <h2>For Creators</h2>
          <div className="section">
            <div className="left-section">
              <h3>A new and better way to earn as a content creator</h3>
              <p>
                Upload your content on the skitstars platform reach a wider
                audience of comedy fans and make money will at it
              </p>
              <button>Become a Creator</button>
            </div>
            <div className="center-section">
              <video className="video" src="video.mp4" controls />
            </div>
          </div>
          <hr className="line" />
          <div className="section">
            <div className="left-sections">
              <h3>Create Events and Sell Tickets</h3>
              <p>
                Organize and sell tickets to live comedy shows, connecting
                performers with global audiences, all while embracing the
                convenience of cryptocurrency payments.
              </p>
            </div>
            <div className="center-sections">
              <h3>Mint and Sell NFTs</h3>
              <p>
                Mint and sell unique NFTs, connecting fans with one-of-a-kind
                collectibles and opening doors to limitless possibilities in the
                digital realm.
              </p>
            </div>
            <div className="right-sections">
              <h3>Sell Ads Vouchers</h3>
              <p>
                Collaborate with brands, earn revenue, and reach your dedicated
                fan base through targeted advertisements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="section">
          <div className="left-section">
            <h1>How it Works</h1>
            <p>
              Becoming a comedy creator on the SkitStars platform is a breeze.
              Connect your crypto wallet, register your brand, and unleash your
              creativity to create hilarious content that earns you revenue and
              recognition. Together, let's redefine the comedy industry, elevate
              the voices of talented creators, and create a world where laughter
              and prosperity go hand in hand.
            </p>
            <button>Learn More</button>
          </div>
          <div className="right-section">
            <div className="timeline">
              <div className="circle">
                <div className="timeline-number">1</div>
                <h4>Connect wallet</h4>
                <p>
                  Seamlessly link your crypto wallet to the SkitStars platform,
                  enabling secure and convenient transactions for your earnings
                  as a comedy creator.
                </p>
              </div>
              <div className="timeline-line" />
              <div className="circle">
                <div className="timeline-number">2</div>
                <h4>Register Brand</h4>
                <p>
                  Complete the easy registration process to establish your
                  presence on SkitStars. Showcase your unique brand and style to
                  attract a dedicated audience.
                </p>
              </div>
              <div className="timeline-line" />
              <div className="circle">
                <div className="timeline-number">3</div>
                <h4>Create &amp; Earn</h4>
                <p>
                  Upload your skits to engage with comedy fans worldwide. you'll
                  earn revenue through various monetization channels like ticket
                  sales, NFTs, and ad vouchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-section">
        <h2>Reviews From Happy Clients</h2>
        <div className="reviews">
          <div className="review-box">
            <img src="person1.jpg" alt="" />
            <h4>Juliet Okoro</h4>
            <p>
              SkitStars turned my comedy talent into a profitable venture with
              their innovative monetization options like NFTs and ads{" "}
            </p>
          </div>
          <div className="review-box">
            <img src="person2.jpg" alt="" />
            <h4>Juliet Okoro</h4>
            <p>
              SkitStars simplified ticket selling, enabling me to effortlessly
              organize shows and connect with comedy enthusiasts
            </p>
          </div>
          <div className="review-box">
            <img src="person3.jpg" alt="" />
            <h4>Juliet Okoro</h4>
            <p>
              SkitStars has become my go-to platform for comedy content. With a
              diverse range of comedy creators
            </p>
          </div>
        </div>
        <div className="arrows">
          <span className="arrow left-arrow"></span>
          <span className="arrow right-arrow"></span>
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="faq-box">
            <p>Can I purchase event tickets directly on the platform?</p>
            <span className="arrow"></span>
          </div>
          <div className="faq-box">
            <p>Are the purchased NFTs transferable?</p>
            <span className="arrow"></span>
          </div>
          <div className="faq-box">
            <p>How do I sell my own event tickets on the platform?</p>
            <span className="arrow"></span>
          </div>
          <div className="faq-box">
            <p>
              How can I collaborate with brands for advertisement opportunities?
            </p>
            <span className="arrow"></span>
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
