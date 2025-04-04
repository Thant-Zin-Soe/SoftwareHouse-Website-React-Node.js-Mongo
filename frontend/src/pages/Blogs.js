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

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleShare = (blog) => {
    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          text: blog.description,
          url: window.location.origin + `/blogs/${blog._id}`,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📰 Our Latest Blogs</h2>
      <div style={styles.listWrapper}>
        {blogs.map((blog) => (
          <div key={blog._id} style={styles.card} onClick={() => handleReadMore(blog._id)}>
            <img
              src={`http://localhost:5001/uploads/${blog.image}`}
              alt={blog.title}
              style={styles.image}
            />
            <div style={styles.textContent}>
              <h3 style={styles.title}>{blog.title}</h3>
              <p style={styles.preview}>{blog.description.substring(0, 180)}...</p>
              <div style={styles.actions}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(blog);
                  }}
                  style={styles.shareBtn}
                >
                  Share
                </button>
                <button style={styles.readMore}>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    color: "#333",
  },
  listWrapper: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  textContent: {
    flex: 1,
  },
  title: {
    margin: "0 0 10px",
    color: "#222",
  },
  preview: {
    color: "#555",
    fontSize: "15px",
    lineHeight: "1.5",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  readMore: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
  shareBtn: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default Blogs;
