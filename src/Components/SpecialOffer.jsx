import React from "react";

import image1 from "../assets/l1.jpg"; // Import the first image
import image2 from "../assets/l3.jpg"; // Import the second image
import "../Components/SpecialOffer.css";
import CountdownTimer from "./CountdownTimer";

const SpecialOffer = () => {
  return (
    <div className="special-offer-wrapper">
      {/* Left Side: Two Images */}
      <div className="image-container">
        <img src={image1} alt="Image 1" className="left-image1" />
        <img src={image2} alt="Image 2" className="left-image" />
      </div>

      {/* Right Side: Special Offer Content */}
      <div className="special-offer-container">
        <div className="offer-tag">SPECIAL OFFER 20%</div>
        <h1 className="product-title">Vanilla Lavender Black Tea Powder</h1>
        <p className="product-description">
        Vanilla Lavender Black Tea Powder is a unique and aromatic blend that combines the bold, robust flavor of black tea with the sweet, creamy notes of vanilla and the calming, floral essence of lavender. This blend offers a soothing and flavorful tea experience, perfect for relaxation and indulgence.        </p>
       <CountdownTimer/>
        <div className="price">
          Get Only <span className="discounted-price">Rs.500</span>
        </div>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default SpecialOffer;