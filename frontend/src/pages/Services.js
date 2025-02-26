

// import React, { useEffect, useState } from "react";
// import "../styles/Services.css";
// import ServiceCard from "../components/ServiceCard";
// import { Container, Grid, Typography } from "@mui/material";

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadServices = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/services");
//         const data = await response.json();
//         setServices(data);
//       } catch (err) {
//         setError("Failed to load services. Please try again.");
//       }
//     };
//     loadServices();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h3" textAlign="center" marginTop={4}>
//         Our AI Services
//       </Typography>
//       {error && <Typography color="error" textAlign="center">{error}</Typography>}
      
//       <Grid container spacing={3} justifyContent="center" marginTop={3}>
//         {services.length === 0 ? (
//           <Typography textAlign="center">No services available.</Typography>
//         ) : (
//           services.map((service) => (
//             <Grid item key={service._id} xs={12} sm={6} md={4}>
//               <ServiceCard service={service} />
//             </Grid>
//           ))
//         )}
//       </Grid>
//     </Container>
//   );
// };

// export default Services;


//---------------------------------

import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import ServiceCard from "../components/ServiceCard";
import { Container, Grid, Typography } from "@mui/material";

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/services");
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError("Failed to load services. Please try again.");
      }
    };
    loadServices();
  }, []);

  return (
    <Container>
      <Typography variant="h3" textAlign="center" marginTop={4}>
        Our AI Services
      </Typography>
      {error && <Typography color="error" textAlign="center">{error}</Typography>}
      
      <Grid container spacing={3} justifyContent="center" marginTop={3}>
        {services.length === 0 ? (
          <Typography textAlign="center">No services available.</Typography>
        ) : (
          services.map((service) => (
            <Grid item key={service._id} xs={12} sm={6} md={4}>
              <ServiceCard service={service} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Services;
