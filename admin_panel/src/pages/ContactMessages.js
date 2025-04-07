import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/contacts");
        setMessages(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch contact messages:", err);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>📨 Contact Messages</h2>
      {messages.map((msg) => (
        <div key={msg._id} style={styles.card}>
          <p><strong>Name:</strong> {msg.name}</p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${msg.email}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.emailLink}
            >
              {msg.email}
            </a>
          </p>

          <p><strong>Message:</strong> {msg.message}</p>

          {msg.file && (
            <p>
              <strong>Word File:</strong>{" "}
              <a href={`http://localhost:5001${msg.file}`} download>
                📎 Download Word File
              </a>
            </p>
          )}

          {msg.images?.length > 0 && (
            <div>
              <strong>Images:</strong>
              <div style={styles.imageGrid}>
                {msg.images.map((img, i) => (
                  <div key={i} style={styles.imageContainer}>
                    <img
                      src={`http://localhost:5001${img}`}
                      alt={`uploaded-${i}`}
                      style={styles.image}
                    />
                    <a
                      href={`http://localhost:5001${img}`}
                      download
                      style={styles.downloadBtn}
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    background: "#f8f9fa",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  emailLink: {
    color: "#007BFF",
    textDecoration: "underline"
  },
  imageGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "150px"
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  downloadBtn: {
    marginTop: "6px",
    padding: "6px 10px",
    fontSize: "14px",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    textAlign: "center"
  }
};

export default ContactMessages;
