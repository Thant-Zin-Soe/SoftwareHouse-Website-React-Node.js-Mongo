// ✅ admin-panel/src/pages/ManageBlogs.js
import React, { useState } from "react";
import axios from "axios";

const ManageBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", content); // ✅ Send description for schema
      formData.append("content", content);      // ✅ Send content for schema
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:5001/api/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Blog posted successfully!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("❌ Blog post failed:", error);
      alert("Error posting blog");
    }
  };

  return (
    <div style={styles.container}>
      <h2>📢 Post a New Blog</h2>
      <form onSubmit={handleSubmit} style={styles.form} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          required
          style={styles.textarea}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Post Blog</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "60%",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fdfdfd",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
    border: "none",
    padding: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default ManageBlogs;
