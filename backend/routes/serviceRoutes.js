const express = require("express");
const router = express.Router();
const { getServices, addService } = require("../controllers/serviceController");
const upload = require("../middleware/uploadMiddleware"); // ✅ Add this

// ✅ Fetch all services
router.get("/", getServices);

// ✅ Add a new service with image upload
router.post("/", upload.single("image"), addService);

module.exports = router;
