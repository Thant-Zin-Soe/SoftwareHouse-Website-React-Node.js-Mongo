import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleView = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>📰 Our Blog Articles</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {blogs.map((blog) => (
          <div key={blog._id} style={styles.card}>
            <img
              src={`http://localhost:5001/uploads/${blog.image}`}
              alt={blog.title}
              style={styles.image}
              onClick={() => handleView(blog._id)}
            />
            <h3>{blog.title}</h3>
            <p>{blog.description.substring(0, 150)}...</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() =>
                  navigator.share({
                    title: blog.title,
                    text: blog.description,
                    url: window.location.href,
                  })
                }
                style={styles.shareBtn}
              >
                Share
              </button>
              <button onClick={() => handleView(blog._id)} style={styles.readBtn}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  shareBtn: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  readBtn: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Blogs;
