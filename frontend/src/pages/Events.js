


import React, { useEffect, useState } from "react";
import { fetchEvents } from "../services/api";
import EventCard from "../components/EventCard";
import { Container, Typography, Grid } from "@mui/material";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        const currentDate = new Date();

        // Separate upcoming & past events based on current date
        const upcoming = data.filter(event => new Date(event.date) >= currentDate);
        const past = data.filter(event => new Date(event.date) < currentDate);

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
      }
    };
    loadEvents();
  }, []);

  return (
    <Container>
      <Typography variant="h3" textAlign="center" marginTop={4}>
        Upcoming Events
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={3}>
        {upcomingEvents.length === 0 ? (
          <Typography textAlign="center">No upcoming events.</Typography>
        ) : (
          upcomingEvents.map(event => (
            <Grid item key={event._id} xs={12} sm={6} md={4}>
              <EventCard 
                event={{
                  ...event, 
                  formattedDate: new Date(event.date).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short"
                  })
                }} 
                allowRegistration={true} 
                allowComments={false} 
              />
            </Grid>
          ))
        )}
      </Grid>

      <Typography variant="h3" textAlign="center" marginTop={6}>
        Previous Events
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={3}>
        {pastEvents.length === 0 ? (
          <Typography textAlign="center">No previous events.</Typography>
        ) : (
          pastEvents.map(event => (
            <Grid item key={event._id} xs={12} sm={6} md={4}>
              <EventCard 
                event={{
                  ...event, 
                  formattedDate: new Date(event.date).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short"
                  })
                }} 
                allowRegistration={false} 
                allowComments={true} 
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Events;
