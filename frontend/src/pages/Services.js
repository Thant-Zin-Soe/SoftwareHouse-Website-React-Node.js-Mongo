// import React, { useEffect, useState } from "react";
// import "../styles/Services.css"; // Ensure you have a CSS file for styling
// import { fetchServices } from "../services/api";

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadServices = async () => {
//       try {
//         const data = await fetchServices();
//         setServices(data);
//       } catch (err) {
//         setError("Failed to load services. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadServices();
//   }, []);

//   return (
//     <div className="services-page">
//       <h1>Our AI Services</h1>
//       {loading && <p>Loading services...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {services.length === 0 && !loading ? (
//         <p>No services available at the moment.</p>
//       ) : (
//         <div className="services-container">
//           {services.map((service) => (
//             <div key={service._id} className="service-card">
//               <img src={service.image || "https://via.placeholder.com/300"} 
//                    alt={service.name} 
//                    className="service-image" />
//               <h3>{service.name}</h3>
//               <p>{service.description}</p>
//               <p><strong>Price:</strong> ${service.price}</p>
//               <button onClick={() => alert(`Requesting demo for ${service.name}`)}>
//                 Request Demo
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;


import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard"; // ✅ Import the ServiceCard component
import "../styles/Services.css"; 
import { fetchServices } from "../services/api"; // ✅ Ensure API call works

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        if (data.length === 0) {
          setError("No services found.");
        }
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
      }
    };
    loadServices();
  }, []);

  return (
    <div>
      
      <div className="services-container">
        <h1>Our AI Services</h1>
        {error && <p className="error-message">{error}</p>}
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          <div className="services-list">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} /> // ✅ Use ServiceCard Component
            ))}
          </div>
        )}
      </div>
    
    </div>
  );
};

export default Services;
