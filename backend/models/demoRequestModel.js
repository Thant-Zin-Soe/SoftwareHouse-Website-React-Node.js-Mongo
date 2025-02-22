// const mongoose = require("mongoose");

// const demoRequestSchema = new mongoose.Schema({
//     serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
//     serviceName: { type: String, required: true },
//     userName: { type: String, required: true },
//     userEmail: { type: String, required: true },
//     userMessage: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("DemoRequest", demoRequestSchema);



const express = require("express");
const router = express.Router();
const DemoRequest = require("../models/demoRequestModel");

/**
 * ✅ Submit a new demo request
 */
router.post("/", async (req, res) => {
    const { serviceId, serviceName, userName, userEmail, userMessage } = req.body;

    try {
        const newRequest = new DemoRequest({
            serviceId,
            serviceName,
            userName,
            userEmail,
            userMessage
        });

        await newRequest.save();
        res.status(201).json({ message: "✅ Demo request submitted successfully!" });
    } catch (error) {
        console.error("❌ Error saving demo request:", error);
        res.status(500).json({ message: "Server error. Try again later." });
    }
});

/**
 * ✅ Fetch all demo requests (For Admin Dashboard)
 */
router.get("/", async (req, res) => {
    try {
        const requests = await DemoRequest.find().sort({ createdAt: -1 }); // Sort by latest requests
        res.json(requests);
    } catch (error) {
        console.error("❌ Error fetching demo requests:", error);
        res.status(500).json({ message: "Server error while fetching demo requests." });
    }
});

module.exports = router;
