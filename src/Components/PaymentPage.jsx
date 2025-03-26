import React, { useState } from "react";
import "./PaymentPage.css"; // Import the CSS file

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!cardNumber || cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }

    if (!cvv || cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    if (!billingAddress) {
      newErrors.billingAddress = "Billing address is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Payment successful! Thank you for your purchase.");
      // Add logic to process payment (e.g., API call)
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Card Number */}
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        {/* Expiry Date */}
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
          />
          {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
        </div>

        {/* CVV */}
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>

        {/* Billing Address */}
        <div className="form-group">
          <label>Billing Address</label>
          <input
            type="text"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            placeholder="123 Main St, City, Country"
          />
          {errors.billingAddress && <span className="error">{errors.billingAddress}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;