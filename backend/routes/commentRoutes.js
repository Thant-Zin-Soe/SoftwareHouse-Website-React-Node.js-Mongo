const express = require("express");
const {
  getComments,
  addComment,
} = require("../controllers/commentController");

const Service = require("../models/serviceModel");
const Event = require("../models/Event");
const Comment = require("../models/commentModel"); 


const router = express.Router();

// ✅ Fetch comments for a specific Service
router.get("/service/:serviceId", getComments);

// ✅ Fetch comments for a specific Event
router.get("/event/:eventId", getComments);

// ✅ Add a new comment for Service or Event
router.post("/", addComment);

// ✅ NEW: Get all services that have comments
router.get("/services-with-comments", async (req, res) => {
  try {
    const servicesWithComments = await Service.find()
      .populate({
        path: "comments",
        match: { $expr: { $gt: [{ $strLenCP: "$comment" }, 0] } }, // has actual comment
      })
      .exec();

    const filtered = servicesWithComments.filter(s => s.comments.length > 0);
    res.json(filtered);
  } catch (error) {
    console.error("❌ Error fetching services with comments:", error);
    res.status(500).json({ message: "Server error while fetching services." });
  }
});

// ✅ NEW: Get all events that have comments
router.get("/events-with-comments", async (req, res) => {
  try {
    const eventsWithComments = await Event.find()
      .populate({
        path: "comments",
        match: { $expr: { $gt: [{ $strLenCP: "$comment" }, 0] } },
      })
      .exec();

    const filtered = eventsWithComments.filter(e => e.comments.length > 0);
    res.json(filtered);
  } catch (error) {
    console.error("❌ Error fetching events with comments:", error);
    res.status(500).json({ message: "Server error while fetching events." });
  }
});

// ✅ NEW: Delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }
    res.status(200).json({ message: "✅ Comment deleted successfully." });
  } catch (error) {
    console.error("❌ Error deleting comment:", error);
    res.status(500).json({ message: "Server error while deleting comment." });
  }
});

module.exports = router;
