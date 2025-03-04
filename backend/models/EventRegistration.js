const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    eventId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Event", 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now, // Automatically sets the current date if not provided
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // ✅ Updated to lowercase to match validation
        default: 'pending',
    },
}, { timestamps: true });

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);
