// ✅ frontend/src/pages/BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("❌ Error fetching blog detail:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <img
        src={`http://localhost:5001/uploads/${blog.image}`}
        alt={blog.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h2 style={{ marginTop: "20px" }}>{blog.title}</h2>
      <p style={{ marginTop: "15px", lineHeight: "1.6" }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
