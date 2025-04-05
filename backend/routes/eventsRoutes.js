const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { createEvent } = require("../controllers/eventController");

const Event = require("../models/Event");

// Existing GET route
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    res.status(500).json({ message: "Server error while fetching events" });
  }
});

// ✅ New POST route with image upload
router.post("/", upload.single("image"), createEvent);

module.exports = router;
