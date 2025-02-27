

const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { 
    approveBooking, 
    approveDemoRequest, 
    getAllBookings, 
    getAllDemoRequests 
} = require("../controllers/adminController");
const { loginAdmin, forgotPassword } = require("../controllers/userController"); // ✅ Import login functions

const router = express.Router();

// ✅ Admin Login Route
router.post("/login", loginAdmin); // ✅ Now login is under /api/admin/login
router.post("/forgot-password", forgotPassword);

// ✅ Apply token verification for protected routes
router.use(verifyToken);

// ✅ Debugging Log
console.log("🔹 Loading Admin Routes...");

// ✅ Get all event bookings (Admin Only)
router.get("/bookings", getAllBookings);

// ✅ Approve or Reject Event Booking
router.patch("/bookings/:id", approveBooking);

// ✅ Get all demo requests (Admin Only)
router.get("/demo-requests", getAllDemoRequests);

// ✅ Approve or Reject Demo Request
router.patch("/demo-requests/:id", approveDemoRequest);

// ✅ Final Debugging Log
console.log("✅ Admin Routes Loaded Successfully");

module.exports = router;
