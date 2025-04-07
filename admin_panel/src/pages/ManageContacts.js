import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageContacts = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/contacts").then((res) => setMessages(res.data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>📥 User Contact Submissions</h2>
      {messages.map((msg) => (
        <div key={msg._id} style={{ background: "#f7f7f7", padding: "15px", marginBottom: "20px", borderRadius: "8px" }}>
          <h4>{msg.name}</h4>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>
          {msg.wordFile && (
            <p>
              <strong>Word File:</strong>{" "}
              <a href={`http://localhost:5001/uploads/${msg.wordFile}`} download>Download</a>
            </p>
          )}
          {msg.images?.length > 0 && (
            <div>
              <strong>Images:</strong>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {msg.images.map((img, idx) => (
                  <img key={idx} src={`http://localhost:5001/uploads/${img}`} alt="Uploaded" width="100" />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageContacts;
