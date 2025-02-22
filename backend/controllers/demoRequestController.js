const DemoRequest = require("../models/demoRequestModel");

/**
 * ✅ Fetch All Demo Requests for Admin
 */
exports.getAllDemoRequests = async (req, res) => {
    try {
        const requests = await DemoRequest.find().sort({ createdAt: -1 }); // Sort by latest requests
        res.json(requests);
    } catch (error) {
        console.error("❌ Error fetching demo requests:", error);
        res.status(500).json({ message: "Server error while fetching demo requests." });
    }
};
