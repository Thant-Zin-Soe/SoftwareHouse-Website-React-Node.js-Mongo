import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchEvents } from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  return (
    <div>
     
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <button onClick={() => alert(`Booking event: ${event.name}`)}>
              Book Now
            </button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Events;
