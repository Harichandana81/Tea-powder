import React from 'react';
import './Section.css'; // Optional: For styling

const Section = () => {
  // Data for the sections
  const sections = [
    {
      icon: '🚚', // Replace with an actual icon or image
      title: 'Free Shipping',
      description: 'Free shipping on all US orders or orders above $200',
    },
    {
      icon: '📞', // Replace with an actual icon or image
      title: '24X7 Support',
      description: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      icon: '🔄', // Replace with an actual icon or image
      title: '30 Days Return',
      description: 'Simply return it within 30 days for an exchange',
    },
    {
      icon: '🔒', // Replace with an actual icon or image
      title: 'Payment Secure',
      description: 'We ensure secure payment with SSL encryption',
    },
  ];

  return (
    <div className="section-container">
      {sections.map((section, index) => (
        <div key={index} className="section-item">
          <div className="section-icon">{section.icon}</div>
          <h3 className="section-title">{section.title}</h3>
          <p className="section-description">{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;