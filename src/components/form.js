import React from "react";
import "./form.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="company-name">SkitStars</div>
      <div className="nav-links">
        <ul>
          <li>Our Mission</li>
          <li>FAQ</li>
          <li>Become a Creator</li>
        </ul>
      </div>
      <div className="wallet-address">Connect Wallet</div>
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul className="sidebar-links">
        <li>Home</li>
        <li className="active">Profile</li>
        <li>Dashboard</li>
        <li>History</li>
        <li>Settings</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

const TicketDetailsPage = () => {
  return (
    <div className="details-page">
      <NavBar />
      <div className="content-wrapper">
        <LeftSidebar />
        <div className="right-section">
          <h2>Upload Video</h2>
          <div className="upload-video-box">
            <p>Recommended size: 350 x 350</p>
            <input type="file" accept="video/*" />
          </div>
          <h2>Name</h2>
          <input
            type="text"
            className="name-input"
            placeholder="Give your video a title"
          />
          <h2>Description</h2>
          <textarea
            className="description-input"
            placeholder="Write a suitable description for your video"
          ></textarea>
          <h2>Tags</h2>
          <input
            type="text"
            className="name-input"
            placeholder="Give your video a title"
          />
          <h2>Category</h2>
          <select>
            <option value="">Choose an option</option>
            <option value="option1">Drama</option>
          </select>

          <h2>Visibility</h2>
          <select>
            <option value="">Choose an option</option>
            <option value="option1">NFT Collectors</option>
          </select>

          <h2>Paid Promotions</h2>

          <input type="checkbox" id="myCheckbox" />
          <label for="myCheckbox">
            My video contains paid promotion like a product or sponsporship
          </label>

          <h2>Comments</h2>

          <input type="checkbox" id="myCheckbox" />
          <label for="myCheckbox">Allow all comments</label>
          <br />
          <input type="checkbox" id="myCheckbox" />
          <label for="myCheckbox">Disable comments</label>
        </div>
        <button className="next-button">Submit</button>
      </div>
    </div>
  );
};

export default TicketDetailsPage;
