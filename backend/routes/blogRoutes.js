const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
  createBlog,
  getBlogs,
  getBlogById, // ✅ Make sure you're not duplicating this
} = require("../controllers/blogController");

// ✅ Create blog with image upload
router.post("/", upload.single("image"), createBlog);

// ✅ Get all blogs
router.get("/", getBlogs);

// ✅ Get single blog by ID
router.get("/:id", getBlogById);

module.exports = router;
