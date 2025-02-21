const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    event: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
