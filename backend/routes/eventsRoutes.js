const express = require("express");
const Event = require("../models/Event");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        console.error("❌ Error fetching events:", error);
        res.status(500).json({ message: "Server error while fetching events" });
    }
});


module.exports = router;
