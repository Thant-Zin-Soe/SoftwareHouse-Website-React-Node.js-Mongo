import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { Button, TextField, Typography, Box } from "@mui/material";

const CommentSection = ({ serviceId }) => {
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [commentText, setCommentText] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        fetch(`http://localhost:5001/api/comments/${serviceId}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error("Error fetching comments:", error));
    }, [serviceId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userName || !userEmail || !commentText || !rating) {
            alert("Please fill in all fields.");
            return;
        }

        const response = await fetch("http://localhost:5001/api/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ serviceId, userName, userEmail, commentText, rating })
        });

        const data = await response.json();
        if (response.ok) {
            setComments([...comments, data.comment]); // ✅ Update UI instantly
            setUserName("");
            setUserEmail("");
            setCommentText("");
            setRating(5);
        } else {
            alert(data.message);
        }
    };

    return (
        <Box sx={{ mt: 3, p: 3, borderRadius: "8px", bgcolor: "#f9f9f9" }}>
            <Typography variant="h5">💬 Comments & Ratings</Typography>

            {/* Show Existing Comments */}
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <Box key={index} sx={{ mt: 2, p: 2, bgcolor: "white", borderRadius: "5px" }}>
                        <Typography><strong>{comment.userName}</strong> ({comment.userEmail})</Typography>
                        <Rating value={comment.rating} readOnly />
                        <Typography>{comment.commentText}</Typography>
                    </Box>
                ))
            ) : (
                <Typography>No comments yet. Be the first to comment!</Typography>
            )}

            {/* Comment Form */}
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    sx={{ mt: 2 }}
                />
                <TextField
                    fullWidth
                    label="Your Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    sx={{ mt: 2 }}
                />
                <TextField
                    fullWidth
                    label="Your Comment"
                    multiline
                    rows={3}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    sx={{ mt: 2 }}
                />
                <Rating
                    value={rating}
                    onChange={(e, newValue) => setRating(newValue)}
                    sx={{ mt: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Submit Comment
                </Button>
            </form>
        </Box>
    );
};

export default CommentSection;
