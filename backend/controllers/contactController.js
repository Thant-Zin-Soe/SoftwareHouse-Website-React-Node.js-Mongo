// ✅ backend/controllers/contactController.js
const ContactMessage = require("../models/ContactMessage");

/**
 * ✅ Create new contact message with optional Word file and images
 */
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    const wordFile = req.files?.wordFile?.[0]?.filename || null;
    const images = req.files?.images?.map((file) => file.filename) || [];

    const newMessage = new ContactMessage({
      name,
      email,
      message,
      file: wordFile ? `/uploads/${wordFile}` : null,
      images: images.map((img) => `/uploads/${img}`),
    });

    await newMessage.save();
    res.status(201).json({ message: "✅ Message submitted successfully", data: newMessage });
  } catch (error) {
    console.error("❌ Error saving contact message:", error);
    res.status(500).json({ message: "Server error while saving contact message." });
  }
};

/**
 * ✅ Admin: Get all contact messages
 */
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error("❌ Error fetching contact messages:", err);
    res.status(500).json({ message: "Server error while fetching contact messages." });
  }
};
