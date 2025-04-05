// const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/uploadMiddleware");
// const { createEvent } = require("../controllers/eventController");

// const Event = require("../models/Event");

// // Existing GET route
// router.get("/", async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (error) {
//     console.error("❌ Error fetching events:", error);
//     res.status(500).json({ message: "Server error while fetching events" });
//   }
// });

// // ✅ New POST route with image upload
// router.post("/", upload.single("image"), createEvent);

// module.exports = router;


const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const multer = require("multer");

// Setup multer for basic parsing (no file storage needed)
const storage = multer.memoryStorage(); // Using memory since no file is being uploaded
const upload = multer({ storage });

/**
 * ✅ Get all events
 */
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    res.status(500).json({ message: "Server error while fetching events" });
  }
});

/**
 * ✅ Add new event
 */
router.post("/", upload.none(), async (req, res) => {
  try {
    const { name, description, date, location } = req.body;

    if (!name || !description || !date || !location) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newEvent = new Event({
      name,
      description,
      date,
      location
    });

    await newEvent.save();
    res.status(201).json({ message: "✅ Event posted successfully", event: newEvent });
  } catch (error) {
    console.error("❌ Error posting event:", error);
    res.status(500).json({ message: "Server error while posting event." });
  }
});

module.exports = router;
