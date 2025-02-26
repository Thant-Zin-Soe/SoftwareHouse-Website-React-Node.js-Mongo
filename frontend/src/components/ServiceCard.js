import React, { useState, useEffect } from "react";
import "../styles/ServiceCard.css";
import { Button, Modal, TextField, Rating, Typography } from "@mui/material";

const ServiceCard = ({ service }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ userName: "", rating: 5, comment: "" });

    // ✅ Fetch comments when modal opens
    useEffect(() => {
        if (showComments) {
            fetch(`http://localhost:5001/api/comments/${service._id}`)
                .then((res) => res.json())
                .then((data) => setComments(data))
                .catch((err) => console.error("❌ Error fetching comments:", err));
        }
    }, [showComments]);

    // ✅ Handle adding a new comment
    const handleAddComment = async () => {
      if (!newComment.userName.trim() || !newComment.comment.trim() || !newComment.rating) {
          alert("All fields are required.");
          return;
      }
  
      const response = await fetch("http://localhost:5001/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
              userName: newComment.userName.trim(),
              rating: newComment.rating, 
              comment: newComment.comment.trim(),
              serviceId: service._id
          }),
      });
  
      const data = await response.json();
      if (response.ok) {
          setComments([data.comment, ...comments]); // ✅ Update UI
          setNewComment({ userName: "", rating: 5, comment: "" }); // ✅ Reset form
      } else {
          alert(data.message);
      }
  };
  

    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>

            <Button
                variant="contained"
                color="primary"
                className="request-demo-btn"
                onClick={() => alert(`Requesting demo for ${service.name}`)}
            >
                Request Demo
            </Button>

            {/* ✅ Comments Button */}
            <Button
                variant="outlined"
                color="secondary"
                className="comments-btn"
                onClick={() => setShowComments(true)}
            >
                Comments
            </Button>

            {/* ✅ Comments Modal */}
            <Modal open={showComments} onClose={() => setShowComments(false)}>
                <div className="comments-modal">
                    <Typography variant="h5">Comments & Reviews</Typography>

                    {/* ✅ Comment Form (No Email Field) */}
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="dense"
                        value={newComment.userName}
                        onChange={(e) => setNewComment({ ...newComment, userName: e.target.value })}
                    />
                    <Rating
                        name="rating"
                        value={newComment.rating}
                        onChange={(e, newValue) => setNewComment({ ...newComment, rating: newValue })}
                    />
                    <TextField
                        label="Your Comment"
                        multiline
                        rows={3}
                        fullWidth
                        margin="dense"
                        value={newComment.comment}
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddComment}>
                        Submit Comment
                    </Button>

                    {/* ✅ Display Previous Comments */}
                    {comments.length > 0 ? (
                        comments.map((c) => (
                            <div key={c._id} className="comment">
                                <strong>{c.userName}</strong> - <Rating value={c.rating} readOnly />
                                <p>{c.comment}</p>
                            </div>
                        ))
                    ) : (
                        <Typography>No comments yet.</Typography>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default ServiceCard;
