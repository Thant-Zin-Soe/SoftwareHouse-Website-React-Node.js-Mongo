
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true }, 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]

});

module.exports = mongoose.model("Event", eventSchema);
