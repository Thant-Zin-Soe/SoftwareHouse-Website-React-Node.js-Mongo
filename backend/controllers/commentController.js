const ContactMessage = require("../models/ContactMessage");
const Comment = require("../models/commentModel");

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

/**
 * ✅ Fetch Comments for a Specific Service or Event
 */
exports.getComments = async (req, res) => {
  const { serviceId, eventId } = req.params;

  try {
    const filter = serviceId ? { serviceId } : { eventId };
    const comments = await Comment.find(filter).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error("❌ Error fetching comments:", error);
    res.status(500).json({ message: "Server error while fetching comments." });
  }
};

/**
 * ✅ Add a new comment for Service or Event
 */
exports.addComment = async (req, res) => {
  const { userName, rating, comment, serviceId, eventId } = req.body;

  if (!userName || !comment || (!serviceId && !eventId)) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newComment = new Comment({
      userName,
      rating,
      comment,
      serviceId: serviceId || null,
      eventId: eventId || null,
    });

    await newComment.save();

    if (serviceId) {
      const Service = require("../models/serviceModel");
      await Service.findByIdAndUpdate(serviceId, { $push: { comments: newComment._id } });
    }

    if (eventId) {
      const Event = require("../models/Event");
      await Event.findByIdAndUpdate(eventId, { $push: { comments: newComment._id } });
    }

    res.status(201).json({ message: "✅ Comment added successfully!", comment: newComment });
  } catch (error) {
    console.error("❌ Error adding comment:", error);
    res.status(500).json({ message: "Server error while adding comment." });
  }
};
