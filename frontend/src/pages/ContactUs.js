import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    wordFile: null,
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "images") {
      setFormData({ ...formData, images: [...e.target.files] });
    } else {
      setFormData({ ...formData, wordFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    if (formData.wordFile) payload.append("wordFile", formData.wordFile);
    formData.images.forEach((img) => payload.append("images", img));

    try {
      await axios.post("http://localhost:5001/api/contacts", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Message sent!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📬 Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name or Company"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Describe your requirements..."
            required
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>

          <div style={styles.fileBox}>
            <label style={styles.label}>📄 Upload Word File (optional):</label>
            <input type="file" name="wordFile" accept=".doc,.docx" onChange={handleFileChange} />
          </div>

          <div style={styles.fileBox}>
            <label style={styles.label}>🖼️ Upload Images (optional):</label>
            <input type="file" name="images" multiple accept="image/*" onChange={handleFileChange} />
          </div>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    minHeight: "120px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    resize: "vertical",
  },
  label: {
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#555",
  },
  fileBox: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ContactUs;
