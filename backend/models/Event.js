
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true }, // ✅ Ensure Date type
});

module.exports = mongoose.model("Event", eventSchema);
