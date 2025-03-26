import React from 'react';
import './Features.css';

const Features = ({ image, icon, title, description, dis }) => {
  return (
    <div className="feature">
      <img src={image} alt={title} className="feature-image "  />
      <div className="zoom-area" id="zoom-area"></div>
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <p className="feature-dis">{dis}</p>
    </div>
  );
};

export default Features;