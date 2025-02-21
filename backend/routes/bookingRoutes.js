const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

/**
 * ✅ Allow users to book an event (Public)
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, event, date } = req.body;

        if (!name || !email || !event || !date) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const booking = new Booking({ name, email, event, date, status: "pending" });
        await booking.save();

        res.status(201).json({ message: "Booking request submitted successfully!", booking });
    } catch (error) {
        console.error("❌ Booking error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
