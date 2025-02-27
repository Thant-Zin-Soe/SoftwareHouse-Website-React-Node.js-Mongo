// import React, { useState, useEffect } from "react";
// import "../styles/EventCard.css";
// import { Button, Modal, TextField, Typography } from "@mui/material";

// const EventCard = ({ event, allowRegistration, allowComments }) => {
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState({ userName: "", comment: "" });

//   // ✅ Fetch comments when modal opens
//   useEffect(() => {
//     if (showComments) {
//       fetch(`http://localhost:5001/api/comments/${event._id}`)
//         .then(res => res.json())
//         .then(data => setComments(data))
//         .catch(err => console.error("❌ Error fetching comments:", err));
//     }
//   }, [showComments]);

//   // ✅ Handle event registration
//   const handleRegister = async () => {
//     const userName = prompt("Enter your name to register:");
//     if (!userName) return;

//     const response = await fetch("http://localhost:5001/api/event-registrations", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: userName, eventId: event._id }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert("✅ Successfully registered for the event!");
//     } else {
//       alert(data.message);
//     }
//   };

//   // ✅ Handle adding a comment
//   const handleAddComment = async () => {
//     if (!newComment.userName.trim() || !newComment.comment.trim()) {
//       alert("All fields are required.");
//       return;
//     }

//     const response = await fetch("http://localhost:5001/api/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userName: newComment.userName.trim(),
//         comment: newComment.comment.trim(),
//         eventId: event._id
//       }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setComments([data.comment, ...comments]);
//       setNewComment({ userName: "", comment: "" });
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="event-card">
//       <h3>{event.name}</h3>
//       <p>📅 Date: {event.date}</p>
//       <p>📍 Location: {event.location}</p>
//       <p>📌 Description: {event.description}</p>

//       {/* ✅ Show Register Button if applicable */}
//       {allowRegistration && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleRegister}
//           className="register-btn"
//         >
//           Register Now
//         </Button>
//       )}

//       {/* ✅ Show Comments Button if applicable */}
//       {allowComments && (
//         <Button
//           variant="outlined"
//           color="secondary"
//           className="comments-btn"
//           onClick={() => setShowComments(true)}
//         >
//           View Comments
//         </Button>
//       )}

//       {/* ✅ Comments Modal */}
//       <Modal open={showComments} onClose={() => setShowComments(false)}>
//         <div className="comments-modal">
//           <Typography variant="h5">Event Comments</Typography>
//           <TextField
//             label="Your Name"
//             fullWidth
//             margin="dense"
//             value={newComment.userName}
//             onChange={(e) => setNewComment({ ...newComment, userName: e.target.value })}
//           />
//           <TextField
//             label="Your Comment"
//             multiline
//             rows={3}
//             fullWidth
//             margin="dense"
//             value={newComment.comment}
//             onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
//           />
//           <Button variant="contained" color="primary" onClick={handleAddComment}>
//             Submit Comment
//           </Button>

//           {/* ✅ Display Previous Comments */}
//           {comments.length > 0 ? (
//             comments.map((c) => (
//               <div key={c._id} className="comment">
//                 <strong>{c.userName}</strong>
//                 <p>{c.comment}</p>
//               </div>
//             ))
//           ) : (
//             <Typography>No comments yet.</Typography>
//           )}
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default EventCard;


import React, { useState, useEffect } from "react";
import "../styles/EventCard.css";
import { Button, Modal, TextField, Typography } from "@mui/material";

const EventCard = ({ event, allowRegistration, allowComments }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ userName: "", comment: "" });

  // ✅ Format date properly
  const formattedDate = new Date(event.date).toLocaleString("en-US", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short"
  });

  // ✅ Fetch comments when modal opens
  useEffect(() => {
    if (showComments) {
      fetch(`http://localhost:5001/api/comments/${event._id}`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.error("❌ Error fetching comments:", err));
    }
  }, [showComments]);

  // ✅ Handle event registration
  const handleRegister = async () => {
    const userName = prompt("Enter your name to register:");
    if (!userName) return;

    const response = await fetch("http://localhost:5001/api/event-registrations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName, eventId: event._id }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("✅ Successfully registered for the event!");
    } else {
      alert(data.message);
    }
  };

  // ✅ Handle adding a comment
  const handleAddComment = async () => {
    if (!newComment.userName.trim() || !newComment.comment.trim()) {
      alert("All fields are required.");
      return;
    }

    const response = await fetch("http://localhost:5001/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: newComment.userName.trim(),
        comment: newComment.comment.trim(),
        eventId: event._id
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setComments([data.comment, ...comments]);
      setNewComment({ userName: "", comment: "" });
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>📅 Date: {formattedDate}</p>
      <p>📍 Location: {event.location}</p>
      <p>📌 Description: {event.description}</p>

      {/* ✅ Show Register Button if applicable */}
      {allowRegistration && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          className="register-btn"
        >
          Register Now
        </Button>
      )}

      {/* ✅ Show Comments Button if applicable */}
      {allowComments && (
        <Button
          variant="outlined"
          color="secondary"
          className="comments-btn"
          onClick={() => setShowComments(true)}
        >
          View Comments
        </Button>
      )}

      {/* ✅ Comments Modal */}
      <Modal open={showComments} onClose={() => setShowComments(false)}>
        <div className="comments-modal">
          <Typography variant="h5">Event Comments</Typography>
          <TextField
            label="Your Name"
            fullWidth
            margin="dense"
            value={newComment.userName}
            onChange={(e) => setNewComment({ ...newComment, userName: e.target.value })}
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
                <strong>{c.userName}</strong>
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
