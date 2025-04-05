// ✅ admin-panel/src/pages/ManageContent.js
import React, { useState } from "react";
import axios from "axios";

const ManageContent = () => {
  // Services form state
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceImage, setServiceImage] = useState(null);

  // Events form state
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);

  const token = localStorage.getItem("adminToken");

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", serviceTitle);
      formData.append("description", serviceDescription);
      formData.append("image", serviceImage);

      await axios.post("http://localhost:5001/api/services", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Service posted successfully");
      setServiceTitle("");
      setServiceDescription("");
      setServiceImage(null);
    } catch (err) {
      console.error("❌ Error posting service:", err);
      alert("Failed to post service");
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", eventName);
      formData.append("description", eventDescription);
      formData.append("date", eventDate);
      formData.append("image", eventImage);

      await axios.post("http://localhost:5001/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Event posted successfully");
      setEventName("");
      setEventDate("");
      setEventDescription("");
      setEventImage(null);
    } catch (err) {
      console.error("❌ Error posting event:", err);
      alert("Failed to post event");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>📌 Manage Content</h2>

      {/* === Service Form === */}
      <section style={styles.section}>
        <h3>🛠️ Post New Service</h3>
        <form onSubmit={handleServiceSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Service Title"
            value={serviceTitle}
            onChange={(e) => setServiceTitle(e.target.value)}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Service Description"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
            style={styles.textarea}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setServiceImage(e.target.files[0])}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Post Service</button>
        </form>
      </section>

      {/* === Event Form === */}
   {/* === Event Form === */}
<section style={styles.section}>
  <h3>📅 Post New Event</h3>
  <form onSubmit={handleEventSubmit} style={styles.form}>
    <input
      type="text"
      placeholder="Event Name"
      value={eventName}
      onChange={(e) => setEventName(e.target.value)}
      required
      style={styles.input}
    />
    <input
      type="date"
      value={eventDate}
      onChange={(e) => setEventDate(e.target.value)}
      required
      style={styles.input}
    />
    <textarea
      placeholder="Event Description"
      value={eventDescription}
      onChange={(e) => setEventDescription(e.target.value)}
      required
      style={styles.textarea}
    />
    <button type="submit" style={styles.button}>Post Event</button>
  </form>
</section>

    </div>
  );
};

const styles = {
  section: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};

export default ManageContent;
