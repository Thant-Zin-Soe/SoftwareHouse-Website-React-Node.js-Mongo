
// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware");
// const { 
//     approveBooking, 
//     approveDemoRequest, 
//     getAllBookings, 
//     getAllDemoRequests 
// } = require("../controllers/adminController");
// const { loginAdmin, forgotPassword } = require("../controllers/userController");
// const DemoRequest = require("../models/DemoRequest"); // ✅ Import DemoRequest model
// const Booking = require("../models/Booking"); // ✅ Import Booking model

// const router = express.Router();

// // ✅ Admin Login Route
// router.post("/login", loginAdmin);
// router.post("/forgot-password", forgotPassword);

// // ✅ Apply token verification for protected routes
// router.use(verifyToken);

// // ✅ Debugging Log
// console.log("🔹 Loading Admin Routes...");

// // ✅ Get all event bookings (Admin Only)
// router.get("/bookings", getAllBookings);

// // ✅ Approve or Reject Event Booking
// router.patch("/bookings/:id", approveBooking);

// // ✅ Get all demo requests (Admin Only)
// router.get("/demo-requests", getAllDemoRequests);

// // ✅ Approve or Reject Demo Request
// router.patch("/demo-requests/:id", approveDemoRequest);

// // ✅ DELETE: Remove a Demo Request
// router.delete("/demo-requests/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedRequest = await DemoRequest.findByIdAndDelete(id);

//         if (!deletedRequest) {
//             return res.status(404).json({ message: "Demo request not found" });
//         }

//         res.status(200).json({ message: "Demo request deleted successfully" });
//     } catch (error) {
//         console.error("❌ Error deleting demo request:", error);
//         res.status(500).json({ message: "Server error while deleting demo request" });
//     }
// });

// // ✅ DELETE: Remove a Booking
// router.delete("/bookings/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedBooking = await Booking.findByIdAndDelete(id);

//         if (!deletedBooking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         res.status(200).json({ message: "Booking deleted successfully" });
//     } catch (error) {
//         console.error("❌ Error deleting booking:", error);
//         res.status(500).json({ message: "Server error while deleting booking" });
//     }
// });

// // ✅ Final Debugging Log
// console.log("✅ Admin Routes Loaded Successfully");

// module.exports = router;


const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { 
    approveEventRegistration, 
    approveDemoRequest, 
    getAllEventRegistrations, 
    getAllDemoRequests 
} = require("../controllers/adminController");
const { loginAdmin, forgotPassword } = require("../controllers/userController");
const DemoRequest = require("../models/DemoRequest"); // ✅ Import DemoRequest model
const EventRegistration = require("../models/EventRegistration"); // ✅ Updated to EventRegistration

const router = express.Router();

// ✅ Admin Login Route
router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPassword);

// ✅ Apply token verification for protected routes
router.use(verifyToken);

// ✅ Debugging Log
console.log("🔹 Loading Admin Routes...");

// ✅ Get all event registrations (Admin Only)
router.get("/event-registrations", getAllEventRegistrations); // ✅ Updated route name

// ✅ Approve or Reject Event Registration
router.patch("/event-registrations/:id", approveEventRegistration); // ✅ Updated function name

// ✅ Get all demo requests (Admin Only)
router.get("/demo-requests", getAllDemoRequests);

// ✅ Approve or Reject Demo Request
router.patch("/demo-requests/:id", approveDemoRequest);

// ✅ DELETE: Remove a Demo Request
router.delete("/demo-requests/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRequest = await DemoRequest.findByIdAndDelete(id);

        if (!deletedRequest) {
            return res.status(404).json({ message: "Demo request not found" });
        }

        res.status(200).json({ message: "Demo request deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting demo request:", error);
        res.status(500).json({ message: "Server error while deleting demo request" });
    }
});

// ✅ DELETE: Remove an Event Registration
router.delete("/event-registrations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRegistration = await EventRegistration.findByIdAndDelete(id); // ✅ Updated model reference

        if (!deletedRegistration) {
            return res.status(404).json({ message: "Event registration not found" });
        }

        res.status(200).json({ message: "Event registration deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting event registration:", error);
        res.status(500).json({ message: "Server error while deleting event registration" });
    }
});

// ✅ Final Debugging Log
console.log("✅ Admin Routes Loaded Successfully");

module.exports = router;
