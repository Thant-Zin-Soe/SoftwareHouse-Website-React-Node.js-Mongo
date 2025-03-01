const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');

// Event Registration Endpoint
router.post('/', async (req, res) => {
  const { name, email, message, eventId } = req.body;

  try {
    const newRegistration = new EventRegistration({ name, email, message, eventId, status: 'Pending' });
    await newRegistration.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error("❌ Error saving registration:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch Event Registrations Endpoint
router.get('/', async (req, res) => {
  try {
    const registrations = await EventRegistration.find().populate('eventId');
    res.status(200).json(registrations);
  } catch (error) {
    console.error("❌ Error fetching registrations:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Approve/Reject Event Registration Endpoint
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const registration = await EventRegistration.findByIdAndUpdate(id, { status }, { new: true });
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    // Send email notification
    const subject = `Your event registration has been ${status}`;
    const text = `Hello ${registration.name},\n\nYour registration for the event "${registration.eventId.name}" has been ${status}.\n\nThank you.`;
    await sendEmail(registration.email, subject, text);

    res.status(200).json({ message: `Registration ${status}` });
  } catch (error) {
    console.error("❌ Error updating registration:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete Event Registration Endpoint
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const registration = await EventRegistration.findByIdAndDelete(id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.status(200).json({ message: 'Registration deleted' });
  } catch (error) {
    console.error("❌ Error deleting registration:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;