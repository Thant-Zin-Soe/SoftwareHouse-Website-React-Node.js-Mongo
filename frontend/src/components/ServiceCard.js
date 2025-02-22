import React from "react";
import "../styles/ServiceCard.css"; // ✅ Make sure this file exists

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img
        src={service.image || "https://via.placeholder.com/300"}
        alt={service.name}
        className="service-image"
      />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p><strong>Price:</strong> ${service.price}</p>
      <button 
        className="request-demo-btn"
        onClick={() => alert(`Requesting demo for ${service.name}`)}
      >
        Request Demo
      </button>
    </div>
  );
};

export default ServiceCard;
