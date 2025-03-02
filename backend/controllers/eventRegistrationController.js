const EventRegistration = require("../models/EventRegistration");
const Event = require("../models/Event");

/**
 * ✅ Fetch All Event Registrations (Admin)
 */
exports.getAllEventRegistrations = async (req, res) => {
    try {
        const registrations = await EventRegistration.find()
            .populate("eventId", "name date location") // Only populate necessary fields
            .sort({ createdAt: -1 }); // Sort by the most recent registrations

        res.json(registrations);
    } catch (error) {
        console.error("❌ Error fetching event registrations:", error.message);
        res.status(500).json({ message: "Server error while fetching event registrations." });
    }
};

/**
 * ✅ Create a New Event Registration
 */
exports.createEventRegistration = async (req, res) => {
    const { name, email, message, eventId, date } = req.body;

    if (!name || !email || !message || !eventId) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // ✅ Verify the event exists
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
            date: date || Date.now(), // Default to current date if not provided
            status: "Pending"
        });

        await newRegistration.save();
        res.status(201).json({ message: "✅ Event registration created successfully", newRegistration });

    } catch (error) {
        console.error("❌ Error creating event registration:", error.message);
        res.status(500).json({ message: "Server error while creating event registration." });
    }
};

/**
 * ✅ Update Event Registration Status
 */
exports.updateEventRegistrationStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status provided." });
    }

    try {
        const updatedRegistration = await EventRegistration.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).populate("eventId", "name");

        if (!updatedRegistration) {
            return res.status(404).json({ message: "Event registration not found." });
        }

        res.status(200).json({ message: `✅ Event registration ${status} successfully`, updatedRegistration });

    } catch (error) {
        console.error("❌ Error updating event registration status:", error.message);
        res.status(500).json({ message: "Server error while updating status." });
    }
};

/**
 * ✅ Delete Event Registration
 */
exports.deleteEventRegistration = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRegistration = await EventRegistration.findByIdAndDelete(id);
        if (!deletedRegistration) {
            return res.status(404).json({ message: "Event registration not found." });
        }

        res.status(200).json({ message: "✅ Event registration deleted successfully" });

    } catch (error) {
        console.error("❌ Error deleting event registration:", error.message);
        res.status(500).json({ message: "Server error while deleting event registration." });
    }
};
