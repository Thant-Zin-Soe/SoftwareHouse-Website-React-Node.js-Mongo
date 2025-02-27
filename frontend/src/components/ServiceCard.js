import React, { useState, useEffect } from "react";
import "../styles/ServiceCard.css";
import { Button, Modal, TextField, Rating, Typography } from "@mui/material";

const ServiceCard = ({ service }) => {
    const [showDemoRequest, setShowDemoRequest] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState(""); 
    const [userMessage, setUserMessage] = useState("");
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
            setComments([data.comment, ...comments]); 
            setNewComment({ userName: "", rating: 5, comment: "" }); 
        } else {
            alert(data.message);
        }
    };

    // ✅ Handle submitting a demo request (Now includes service name in message)
    const handleRequestDemo = async () => {
        if (!userName.trim() || !userEmail.trim() || !userMessage.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        // 🔹 Combine user message with service name
        const fullMessage = `${userMessage} (Requested Service: ${service.name})`;

        const response = await fetch("http://localhost:5001/api/demo-requests", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: userName.trim(),
                email: userEmail.trim(),
                message: fullMessage, 
                serviceName: service.name, 
            }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("✅ Demo request submitted successfully!");
            setShowDemoRequest(false);
            setUserName("");
            setUserEmail("");
            setUserMessage("");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>

            {/* ✅ Request Demo Button */}
            <Button
                variant="contained"
                color="primary"
                className="request-demo-btn"
                onClick={() => setShowDemoRequest(true)}
            >
                Request Demo
            </Button>

            {/* ✅ Request Demo Modal */}
            <Modal open={showDemoRequest} onClose={() => setShowDemoRequest(false)}>
                <div className="demo-request-modal">
                    <Typography variant="h5">Request a Demo</Typography>
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
                        onClick={handleRequestDemo}
                        style={{ marginTop: "12px" }}
                    >
                        Submit Request
                    </Button>
                </div>
            </Modal>

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
