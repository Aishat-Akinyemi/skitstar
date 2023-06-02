import React from "react";
import "./success.css";

const Popup = () => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="tick-mark">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 11.429l7.407 7.407L22.099 2.136 19.963 0 7.407 12.557 4.064 9.214z" />
          </svg>
        </div>
        <h2 className="popup-heading">Bid Placed Sucessfully</h2>
        <p className="popup-description">
          Your bid has been placed successfully.. The winner will be announced
          by 4PM on the 10th of December, 2022.{" "}
        </p>
      </div>
    </div>
  );
};

export default Popup;
