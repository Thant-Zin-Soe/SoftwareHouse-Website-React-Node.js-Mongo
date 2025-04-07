// ✅ backend/models/ContactMessage.js
const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  file: { type: String }, // Word doc or similar
  images: [{ type: String }], // Array of image paths
}, { timestamps: true });

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
