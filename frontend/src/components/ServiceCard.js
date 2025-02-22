import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import "../styles/ServiceCard.css"; // Keep custom styling for additional tweaks

const ServiceCard = ({ service }) => {
  return (
    <Card className="service-card">
      {/* Service Image */}
      <CardMedia
        component="img"
        height="200"
        image={service.image || "https://via.placeholder.com/300"}
        alt={service.name}
        className="service-image"
      />

      {/* Card Content */}
      <CardContent>
        <Typography variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
          ${service.price || "N/A"}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <CardActions>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={() => alert(`Requesting demo for ${service.name}`)}
        >
          Request Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
