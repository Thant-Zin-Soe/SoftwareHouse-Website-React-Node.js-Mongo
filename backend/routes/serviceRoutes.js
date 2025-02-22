// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, default: "https://via.placeholder.com/300" }, // ✅ Default Image
// });

// module.exports = mongoose.model("Service", serviceSchema);


const express = require("express");
const { getServices, addService } = require("../controllers/serviceController"); // ✅ Ensure Correct Path

const router = express.Router();

/**
 * ✅ Route: Fetch all services
 * @route GET /api/services
 */
router.get("/", getServices);

/**
 * ✅ Route: Add a new service
 * @route POST /api/services
 */
router.post("/", addService);

module.exports = router;
