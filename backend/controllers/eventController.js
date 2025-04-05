// // ✅ backend/controllers/eventController.js
// const Event = require("../models/Event");

// exports.createEvent = async (req, res) => {
//   try {
//     const { name, description, date } = req.body;
//     const image = req.file ? req.file.filename : null;

//     if (!name || !description || !date) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     const newEvent = new Event({
//       name,
//       description,
//       date,
//       image: image
//         ? `http://localhost:5001/uploads/${image}`
//         : "https://via.placeholder.com/300"
//     });

//     await newEvent.save();
//     res.status(201).json({ message: "✅ Event posted successfully", event: newEvent });
//   } catch (error) {
//     console.error("❌ Error creating event:", error);
//     res.status(500).json({ message: "Server error while creating event." });
//   }
// };

// exports.getEvents = async (req, res) => {
//   try {
//     const events = await Event.find().sort({ date: 1 });
//     res.status(200).json(events);
//   } catch (error) {
//     console.error("❌ Error fetching events:", error);
//     res.status(500).json({ message: "Server error while fetching events." });
//   }
// };

const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new Event({
      name,
      description,
      location: "Online", // Set default or add location input if needed
      date,
      image: image ? `/uploads/${image}` : "https://via.placeholder.com/300"
    });

    await newEvent.save();
    res.status(201).json({ message: "✅ Event created successfully", event: newEvent });
  } catch (error) {
    console.error("❌ Error creating event:", error);
    res.status(500).json({ message: "Server error while creating event" });
  }
};
