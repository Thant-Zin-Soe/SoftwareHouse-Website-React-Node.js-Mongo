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
        enum: ['Pending', 'Approved', 'Rejected'], // Capitalized
        default: 'Pending',
      }
      ,
}, { timestamps: true });

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);
