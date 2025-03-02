const express = require("express");
const router = express.Router();
const EventRegistration = require("../models/EventRegistration");
const Event = require("../models/Event");

// 🚨 Add this if email sending is needed
// const { sendEmail } = require("../services/emailService"); 

/**
 * ✅ Create a New Event Registration
 * @route POST /api/event-registrations
 * @access Public
 */
router.post("/", async (req, res) => {
    const { name, email, message, eventId, date } = req.body;

    // ✅ Validate Required Fields
    if (!name || !email || !message || !eventId) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // ✅ Check if the event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found." });
        }

        // ✅ Create and save the new event registration
        const newRegistration = new EventRegistration({
            name,
            email,
            message,
            eventId,
            date: date || Date.now(), // Automatically set the current date if not provided
            status: "Pending"
        });

        await newRegistration.save();
        res.status(201).json({ message: "✅ Registration successful", newRegistration });

    } catch (error) {
        console.error("❌ Error saving registration:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * ✅ Fetch All Event Registrations
 * @route GET /api/event-registrations
 * @access Admin
 */
router.get("/", async (req, res) => {
    try {
        const registrations = await EventRegistration.find()
            .populate("eventId", "name date location") // Populate only specific fields
            .sort({ createdAt: -1 });

        res.status(200).json(registrations);
    } catch (error) {
        console.error("❌ Error fetching registrations:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * ✅ Approve or Reject Event Registration
 * @route PATCH /api/event-registrations/:id
 * @access Admin
 */
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // ✅ Validate status
    if (!["Approved", "Rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status provided." });
    }

    try {
        const registration = await EventRegistration.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).populate("eventId", "name");

        if (!registration) {
            return res.status(404).json({ message: "Registration not found" });
        }

        // 🚨 Optionally Send Email Notification
        // try {
        //     const subject = `Your event registration has been ${status}`;
        //     const text = `Hello ${registration.name},\n\nYour registration for the event "${registration.eventId.name}" has been ${status}.\n\nThank you.`;
        //     await sendEmail(registration.email, subject, text);
        // } catch (error) {
        //     console.error("❌ Error sending email:", error.message);
        // }

        res.status(200).json({ message: `✅ Registration ${status}`, registration });

    } catch (error) {
        console.error("❌ Error updating registration:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

/**
 * ✅ Delete Event Registration
 * @route DELETE /api/event-registrations/:id
 * @access Admin
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const registration = await EventRegistration.findByIdAndDelete(id);
        if (!registration) {
            return res.status(404).json({ message: "Registration not found" });
        }
        res.status(200).json({ message: "✅ Registration deleted" });

    } catch (error) {
        console.error("❌ Error deleting registration:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
