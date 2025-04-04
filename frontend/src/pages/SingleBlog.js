import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("❌ Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p style={{ textAlign: "center" }}>Loading blog...</p>;

  return (
    <div style={styles.container}>
      <h2>{blog.title}</h2>
      <img
        src={`http://localhost:5001/uploads/${blog.image}`}
        alt={blog.title}
        style={styles.image}
      />
      <p style={styles.content}>{blog.content}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  content: {
    lineHeight: "1.6",
    fontSize: "18px",
  },
};

export default SingleBlog;
