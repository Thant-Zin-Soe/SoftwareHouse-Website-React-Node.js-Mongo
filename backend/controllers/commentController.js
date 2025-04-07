const Comment = require("../models/commentModel");
const Service = require("../models/serviceModel");
const Event = require("../models/Event");

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
 * ✅ Add a New Comment for Service or Event (and push reference)
 */
exports.addComment = async (req, res) => {
  const { userName, rating, comment, serviceId, eventId } = req.body;

  if (!userName || !rating || !comment || (!serviceId && !eventId)) {
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

    // ✅ Push comment _id into corresponding service or event
    if (serviceId) {
      await Service.findByIdAndUpdate(
        serviceId,
        { $push: { comments: newComment._id } },
        { new: true }
      );
    } else if (eventId) {
      await Event.findByIdAndUpdate(
        eventId,
        { $push: { comments: newComment._id } },
        { new: true }
      );
    }

    res.status(201).json({ message: "✅ Comment added successfully!", comment: newComment });
  } catch (error) {
    console.error("❌ Error adding comment:", error);
    res.status(500).json({ message: "Server error while adding comment." });
  }
};
