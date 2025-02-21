import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchProducts } from "../services/api";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchProducts();
      setServices(data);
    };
    loadServices();
  }, []);

  return (
    <div>
     
      <h1>Our AI Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button onClick={() => alert(`Requesting demo for ${service.name}`)}>
              Request Demo
            </button>
          </li>
        ))}
      </ul>
   
    </div>
  );
};

export default Services;
