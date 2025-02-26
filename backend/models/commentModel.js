const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userName: { type: String, required: true }, // ✅ Only Name Required
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
