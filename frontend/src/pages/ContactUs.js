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
    <div style={{ padding: "30px" }}>
      <h2>📬 Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "600px" }}>
        <input type="text" name="name" placeholder="Name or Company Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Describe your requirements..." onChange={handleChange}></textarea>
        <label>Upload Word File: <input type="file" name="wordFile" accept=".doc,.docx" onChange={handleFileChange} /></label>
        <label>Upload Images (optional): <input type="file" name="images" multiple accept="image/*" onChange={handleFileChange} /></label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
