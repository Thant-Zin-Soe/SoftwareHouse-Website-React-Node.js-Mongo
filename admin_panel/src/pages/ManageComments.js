import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageComments = () => {
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Use new endpoints that only return items with comments
        const [servicesRes, eventsRes] = await Promise.all([
          axios.get("http://localhost:5001/api/comments/services-with-comments"),
          axios.get("http://localhost:5001/api/comments/events-with-comments"),
        ]);

        setServices(servicesRes.data);
        setEvents(eventsRes.data);
      } catch (err) {
        console.error("❌ Error loading comments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;
    try {
      await axios.delete(`http://localhost:5001/api/comments/${commentId}`);
      setServices((prev) =>
        prev.map((s) => ({
          ...s,
          comments: s.comments.filter((c) => c._id !== commentId),
        }))
      );
      setEvents((prev) =>
        prev.map((e) => ({
          ...e,
          comments: e.comments.filter((c) => c._id !== commentId),
        }))
      );
    } catch (err) {
      alert("❌ Failed to delete comment");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>🗨️ Manage Comments</h2>

      {/* === Services with Comments === */}
      <section style={styles.section}>
        <h3>🛠️ Services with Comments</h3>
        {services.length === 0 ? (
          <p>No service comments available.</p>
        ) : (
          services.map((service) => (
            <div key={service._id} style={styles.card}>
              <h4>{service.name}</h4>
              {service.comments.map((comment) => (
                <div key={comment._id} style={styles.comment}>
                  <p><strong>{comment.userName}</strong>: {comment.comment}</p>
                  {comment.rating && <p>⭐ Rating: {comment.rating}</p>}
                  <button onClick={() => handleDelete(comment._id)} style={styles.deleteBtn}>Delete</button>
                </div>
              ))}
            </div>
          ))
        )}
      </section>

      {/* === Events with Comments === */}
      <section style={styles.section}>
        <h3>📅 Events with Comments</h3>
        {events.length === 0 ? (
          <p>No event comments available.</p>
        ) : (
          events.map((event) => (
            <div key={event._id} style={styles.card}>
              <h4>{event.name}</h4>
              {event.comments.map((comment) => (
                <div key={comment._id} style={styles.comment}>
                  <p><strong>{comment.userName}</strong>: {comment.comment}</p>
                  <button onClick={() => handleDelete(comment._id)} style={styles.deleteBtn}>Delete</button>
                </div>
              ))}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
  },
  card: {
    padding: "15px",
    borderBottom: "1px solid #ccc",
  },
  comment: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  deleteBtn: {
    marginTop: "5px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ManageComments;
