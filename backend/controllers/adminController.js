

const DemoRequest = require("../models/DemoRequest");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// ✅ Setup Nodemailer Transport (Using Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS   // Your App Password from Gmail
    },
    tls: {
        rejectUnauthorized: false  // ✅ Prevent TLS issues
    }
});

/**
 * ✅ Function to Send Email Notification
 */
const sendEmailNotification = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: `"AI Solution Team" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text
        };

        await transporter.sendMail(mailOptions);
        console.log(`📧 Email sent to: ${to}`);
        return { success: true };
    } catch (error) {
        console.error(`❌ Failed to send email to ${to}:`, error);
        throw error;
    }
};

/**
 * ✅ Get all event bookings (Admin Only)
 */
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("❌ Error fetching bookings:", error);
        res.status(500).json({ message: "Server error while fetching bookings", error });
    }
};

/**
 * ✅ Get all demo requests (Admin Only)
 */
exports.getAllDemoRequests = async (req, res) => {
    try {
        const demoRequests = await DemoRequest.find();
        res.status(200).json(demoRequests);
    } catch (error) {
        console.error("❌ Error fetching demo requests:", error);
        res.status(500).json({ message: "Server error while fetching demo requests", error });
    }
};

/**
 * ✅ Approve or Reject Event Booking & Send Email Notification
 */
exports.approveBooking = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
    }

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.status === status) {
            return res.status(200).json({ message: `Booking is already marked as ${status}. No changes made.` });
        }

        booking.status = status;
        await booking.save();

        // ✅ Send Email Notification
        try {
            await sendEmailNotification(
                booking.email,
                `Your Event Booking has been ${status}`,
                `Dear ${booking.name},\n\nYour booking for "${booking.event}" on ${booking.date} has been ${status}.\n\nBest regards,\nAI Solution Team`
            );
        } catch (emailError) {
            return res.status(500).json({ message: "Booking updated, but email notification failed.", error: emailError });
        }

        res.status(200).json({ message: `Booking ${status} successfully`, booking });

    } catch (error) {
        console.error("❌ Error updating booking status:", error);
        res.status(500).json({ message: "Server error while updating booking status", error });
    }
};

/**
 * ✅ Approve or Reject Demo Request & Send Email Notification
 */
exports.approveDemoRequest = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
    }

    try {
        const demoRequest = await DemoRequest.findById(id);
        if (!demoRequest) {
            return res.status(404).json({ message: "Demo request not found" });
        }

        if (demoRequest.status === status) {
            return res.status(200).json({ message: `Demo request is already marked as ${status}. No changes made.` });
        }

        demoRequest.status = status;
        await demoRequest.save();

        // ✅ Send Email Notification
        try {
            await sendEmailNotification(
                demoRequest.email,
                `Your Demo Request has been ${status}`,
                `Dear ${demoRequest.name},\n\nYour request for a demo has been ${status}.\n\nBest regards,\nAI Solution Team`
            );
        } catch (emailError) {
            return res.status(500).json({ message: "Demo request updated, but email notification failed.", error: emailError });
        }

        res.status(200).json({ message: `Demo request ${status} successfully`, demoRequest });

    } catch (error) {
        console.error("❌ Error updating demo request status:", error);
        res.status(500).json({ message: "Server error while updating demo request status", error });
    }
};
