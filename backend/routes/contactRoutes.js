
// ✅ backend/routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const contactController = require("../controllers/contactController");

// ✅ Submit contact form
router.post(
  "/",
  upload.fields([
    { name: "wordFile", maxCount: 1 },
    { name: "images", maxCount: 10 },
  ]),
  contactController.createContact
);

// ✅ Get all messages
router.get("/", contactController.getAllMessages);

module.exports = router;