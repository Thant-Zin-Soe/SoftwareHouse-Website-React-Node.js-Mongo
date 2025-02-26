const express = require("express");
const { getComments, addComment } = require("../controllers/commentController");
const router = express.Router();

/**
 * ✅ Route: Fetch comments for a specific service
 * @route GET /api/comments/:serviceId
 */
router.get("/:serviceId", getComments);

/**
 * ✅ Route: Add a new comment
 * @route POST /api/comments
 */
router.post("/", addComment);

module.exports = router;
