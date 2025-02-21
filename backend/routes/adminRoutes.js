// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware");
// const { 
//     approveBooking, 
//     approveDemoRequest, 
//     getAllBookings, 
//     getAllDemoRequests 
// } = require("../controllers/adminController");  // ✅ Ensure all functions are imported

// const router = express.Router();

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// router.get("/bookings", verifyToken, getAllBookings);

// /**
//  * ✅ Approve or Reject Event Booking
//  */
// router.patch("/bookings/:id", verifyToken, approveBooking);

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// router.get("/demo-requests", verifyToken, getAllDemoRequests); // ✅ Ensure this function exists in adminController.js

// /**
//  * ✅ Approve or Reject Demo Request
//  */
// router.patch("/demo-requests/:id", verifyToken, approveDemoRequest); // ✅ Ensure this function exists in adminController.js

// module.exports = router;
//-----------------------------------

// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware");
// const { 
//     approveBooking, 
//     approveDemoRequest, 
//     getAllBookings, 
//     getAllDemoRequests 
// } = require("../controllers/adminController");  // ✅ Ensure all functions are correctly imported

// const router = express.Router();

// // ✅ Debugging Log
// console.log("🔹 Loading Admin Routes...");

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// router.get("/bookings", verifyToken, async (req, res) => {
//     try {
//         console.log("📥 GET /api/admin/bookings - Fetching all bookings");
//         await getAllBookings(req, res);
//     } catch (error) {
//         console.error("❌ Error fetching bookings:", error);
//         res.status(500).json({ message: "Server error while fetching bookings" });
//     }
// });

// /**
//  * ✅ Approve or Reject Event Booking
//  */
// router.patch("/bookings/:id", verifyToken, async (req, res) => {
//     try {
//         console.log(`📌 PATCH /api/admin/bookings/${req.params.id} - Updating booking status`);
//         await approveBooking(req, res);
//     } catch (error) {
//         console.error("❌ Error updating booking status:", error);
//         res.status(500).json({ message: "Server error while updating booking status" });
//     }
// });

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// router.get("/demo-requests", verifyToken, async (req, res) => {
//     try {
//         console.log("📥 GET /api/admin/demo-requests - Fetching all demo requests");
//         await getAllDemoRequests(req, res);
//     } catch (error) {
//         console.error("❌ Error fetching demo requests:", error);
//         res.status(500).json({ message: "Server error while fetching demo requests" });
//     }
// });

// /**
//  * ✅ Approve or Reject Demo Request
//  */
// router.patch("/demo-requests/:id", verifyToken, async (req, res) => {
//     try {
//         console.log(`📌 PATCH /api/admin/demo-requests/${req.params.id} - Updating demo request status`);
//         await approveDemoRequest(req, res);
//     } catch (error) {
//         console.error("❌ Error updating demo request status:", error);
//         res.status(500).json({ message: "Server error while updating demo request status" });
//     }
// });

// // ✅ Final Debugging Log
// console.log("✅ Admin Routes Loaded Successfully");

// module.exports = router;

//-----------------------------------------------------------------------------
// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware");
// const { 
//     approveBooking, 
//     approveDemoRequest, 
//     getAllBookings, 
//     getAllDemoRequests 
// } = require("../controllers/adminController");

// const router = express.Router();

// // ✅ Debugging Log
// console.log("🔹 Loading Admin Routes...");

// /**
//  * ✅ Admin Login Route (Moved to userRoutes.js)
//  */
// // Removed login and forgot-password, now placed in userRoutes.js

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// router.get("/bookings", verifyToken, async (req, res) => {
//     try {
//         console.log("📥 GET /api/admin/bookings - Fetching all bookings");
//         await getAllBookings(req, res);
//     } catch (error) {
//         console.error("❌ Error fetching bookings:", error);
//         res.status(500).json({ message: "Server error while fetching bookings" });
//     }
// });

// /**
//  * ✅ Approve or Reject Event Booking
//  */
// router.patch("/bookings/:id", verifyToken, async (req, res) => {
//     try {
//         console.log(`📌 PATCH /api/admin/bookings/${req.params.id} - Updating booking status`);
//         await approveBooking(req, res);
//     } catch (error) {
//         console.error("❌ Error updating booking status:", error);
//         res.status(500).json({ message: "Server error while updating booking status" });
//     }
// });

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// router.get("/demo-requests", verifyToken, async (req, res) => {
//     try {
//         console.log("📥 GET /api/admin/demo-requests - Fetching all demo requests");
//         await getAllDemoRequests(req, res);
//     } catch (error) {
//         console.error("❌ Error fetching demo requests:", error);
//         res.status(500).json({ message: "Server error while fetching demo requests" });
//     }
// });

// /**
//  * ✅ Approve or Reject Demo Request
//  */
// router.patch("/demo-requests/:id", verifyToken, async (req, res) => {
//     try {
//         console.log(`📌 PATCH /api/admin/demo-requests/${req.params.id} - Updating demo request status`);
//         await approveDemoRequest(req, res);
//     } catch (error) {
//         console.error("❌ Error updating demo request status:", error);
//         res.status(500).json({ message: "Server error while updating demo request status" });
//     }
// });

// // ✅ Final Debugging Log
// console.log("✅ Admin Routes Loaded Successfully");

// module.exports = router;

//----------------------------------------------------------------

// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware");
// const { 
//     approveBooking, 
//     approveDemoRequest, 
//     getAllBookings, 
//     getAllDemoRequests 
// } = require("../controllers/adminController");

// const router = express.Router();

// // ✅ Apply token verification for all routes
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

// // ✅ Final Debugging Log
// console.log("✅ Admin Routes Loaded Successfully");

// module.exports = router;


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
