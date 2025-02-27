// const express = require("express");
// const DemoRequest = require("../models/DemoRequest");

// const router = express.Router();

// /**
//  * ✅ Allow users to request a demo (Public)
//  */
// router.post("/", async (req, res) => {
//     try {
//         const { name, email, message } = req.body;

//         if (!name || !email || !message) {
//             return res.status(400).json({ message: "All fields are required." });
//         }

//         const demoRequest = new DemoRequest({ name, email, message, status: "pending" });
//         await demoRequest.save();

//         res.status(201).json({ message: "Demo request submitted successfully!", demoRequest });
//     } catch (error) {
//         console.error("❌ Demo request error:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// module.exports = router;

const express = require("express");
const DemoRequest = require("../models/DemoRequest");

const router = express.Router();

/**
 * @route   POST /api/demo-requests
 * @desc    Allow users to request a demo (Public)
 * @access  Public
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, message, serviceName } = req.body;

        if (!name || !email || !message || !serviceName) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const fullMessage = `${message} (Requested Service: ${serviceName})`;

        const demoRequest = new DemoRequest({ 
            name, 
            email, 
            message: fullMessage,  // ✅ Now stores message + service name
            serviceName
        });

        await demoRequest.save();

        res.status(201).json({ message: "✅ Demo request submitted successfully!", demoRequest });
    } catch (error) {
        console.error("❌ Demo request error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
