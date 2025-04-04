const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { createBlog, getBlogs } = require("../controllers/blogController");

// Image upload + blog create
router.post("/", upload.single("image"), createBlog);

// Fetch blogs
router.get("/", getBlogs);

module.exports = router;
