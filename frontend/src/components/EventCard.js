import React, { useState, useEffect } from "react";
import "../styles/ServiceCard.css";
import { Button, Modal, TextField, Rating, Typography } from "@mui/material";

const EventCard = ({ event, allowRegistration, allowComments }) => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ userName: "", rating: 5, comment: "" });

    useEffect(() => {
        if (showComments) {
            fetch(`http://localhost:5001/api/comments/${event._id}`)
                .then((res) => res.json())
                .then((data) => setComments(data))
                .catch((err) => console.error("❌ Error fetching comments:", err));
        }
    }, [showComments]);

    // ✅ Handle event registration
    const handleRegister = async () => {
        if (!userName.trim() || !userEmail.trim() || !userMessage.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        // const fullMessage = `${userMessage}`;

        const response = await fetch("http://localhost:5001/api/event-registrations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: userName.trim(),
                email: userEmail.trim(),
                message: userMessage.trim(),
                eventId: event._id,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("✅ Event registration submitted successfully!");
            setShowRegisterModal(false);
            setUserName("");
            setUserEmail("");
            setUserMessage("");
        } else {
            alert(data.message);
        }
    };

    // ✅ Handle adding a comment with rating
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
                eventId: event._id,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            setComments([data.comment, ...comments]);
            setNewComment({ userName: "", rating: 5, comment: "" });
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="service-card">
            <h3>{event.name}</h3>
            <p>📅 Date: {event.formattedDate}</p>
            <p>📍 Location: {event.location}</p>
            <p>📌 Description: {event.description}</p>

            {/* ✅ Registration Button */}
            {allowRegistration && (
                <Button
                    variant="contained"
                    color="primary"
                    className="request-demo-btn"
                    onClick={() => setShowRegisterModal(true)}
                >
                    Register Now
                </Button>
            )}

            {/* ✅ Registration Modal */}
            <Modal open={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
                <div className="demo-request-modal">
                    <Typography variant="h5">Register for Event</Typography>
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="dense"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        label="Your Email"
                        fullWidth
                        margin="dense"
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <TextField
                        label="Your Message"
                        multiline
                        rows={3}
                        fullWidth
                        margin="dense"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        style={{ marginTop: "12px" }}
                    >
                        Submit Registration
                    </Button>
                </div>
            </Modal>

            {/* ✅ Comments Button */}
            {allowComments && (
                <Button
                    variant="outlined"
                    color="secondary"
                    className="comments-btn"
                    onClick={() => setShowComments(true)}
                >
                    Comments
                </Button>
            )}

            {/* ✅ Comments Modal with Rating */}
            <Modal open={showComments} onClose={() => setShowComments(false)}>
                <div className="comments-modal">
                    <Typography variant="h5">Comments & Reviews</Typography>

                    {/* ✅ Comment Form with Rating */}
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

export default EventCard;
