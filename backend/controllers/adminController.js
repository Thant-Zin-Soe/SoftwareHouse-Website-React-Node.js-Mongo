// const Booking = require("../models/Booking");
// const DemoRequest = require("../models/DemoRequest");
// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     tls: { rejectUnauthorized: false }
// });

// exports.getAllBookings = async (req, res) => {
//     try {
//         const bookings = await Booking.find();
//         res.json(bookings);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };

// exports.getAllDemoRequests = async (req, res) => {
//     try {
//         const demoRequests = await DemoRequest.find();
//         res.json(demoRequests);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };

// exports.approveBooking = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     try {
//         const booking = await Booking.findById(id);
//         if (!booking) return res.status(404).json({ message: "Booking not found" });

//         booking.status = status;
//         await booking.save();

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: booking.email,
//             subject: `Your Event Booking has been ${status}`,
//             text: `Dear ${booking.name},\n\nYour booking for "${booking.event}" on ${booking.date} has been ${status}.`
//         };

//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: `Booking ${status} successfully`, booking });

//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };
//   second update is here -------------------------------------------->
// const DemoRequest = require("../models/DemoRequest");
// const Booking = require("../models/Booking");
// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// // ✅ Setup Nodemailer Transport
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     },
//     tls: {
//         rejectUnauthorized: false  // ✅ Prevent TLS issues
//     }
// });

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// exports.getAllBookings = async (req, res) => {
//     try {
//         const bookings = await Booking.find();
//         res.status(200).json(bookings);
//     } catch (error) {
//         console.error("❌ Error fetching bookings:", error);
//         res.status(500).json({ message: "Server error while fetching bookings", error });
//     }
// };

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// exports.getAllDemoRequests = async (req, res) => {
//     try {
//         const demoRequests = await DemoRequest.find();
//         res.status(200).json(demoRequests);
//     } catch (error) {
//         console.error("❌ Error fetching demo requests:", error);
//         res.status(500).json({ message: "Server error while fetching demo requests", error });
//     }
// };

// /**
//  * ✅ Approve or Reject Event Booking & Send Email
//  */
// exports.approveBooking = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body; // Can be "approved" or "rejected"

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const booking = await Booking.findById(id);
//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         if (booking.status === status) {
//             return res.status(200).json({ message: `Booking is already marked as ${status}. No changes made.` });
//         }

//         booking.status = status;
//         await booking.save();

//         // ✅ Send Email Notification to User
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: booking.email,
//             subject: `Your Event Booking has been ${status}`,
//             text: `Dear ${booking.name},\n\nYour booking for "${booking.event}" on ${booking.date} has been ${status}.\n\nBest regards,\nAI Solution Team`
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             console.log(`📧 Email sent to: ${booking.email} (Booking ${status})`);
//         } catch (emailError) {
//             console.error("❌ Failed to send email:", emailError);
//             return res.status(500).json({ message: "Booking updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Booking ${status} successfully`, booking });

//     } catch (error) {
//         console.error("❌ Error updating booking status:", error);
//         res.status(500).json({ message: "Server error while updating booking status", error });
//     }
// };

// /**
//  * ✅ Approve or Reject Demo Request & Send Email Notification
//  */
// exports.approveDemoRequest = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body; // Can be "approved" or "rejected"

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const demoRequest = await DemoRequest.findById(id);
//         if (!demoRequest) {
//             return res.status(404).json({ message: "Demo request not found" });
//         }

//         if (demoRequest.status === status) {
//             return res.status(200).json({ message: `Demo request is already marked as ${status}. No changes made.` });
//         }

//         demoRequest.status = status;
//         await demoRequest.save();

//         // ✅ Send Email Notification to User
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: demoRequest.email,
//             subject: `Your Demo Request has been ${status}`,
//             text: `Dear ${demoRequest.name},\n\nYour request for a demo has been ${status}.\n\nBest regards,\nAI Solution Team`
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             console.log(`📧 Email sent to: ${demoRequest.email} (Demo request ${status})`);
//         } catch (emailError) {
//             console.error("❌ Failed to send email:", emailError);
//             return res.status(500).json({ message: "Demo request updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Demo request ${status} successfully`, demoRequest });

//     } catch (error) {
//         console.error("❌ Error updating demo request status:", error);
//         res.status(500).json({ message: "Server error while updating demo request status", error });
//     }
// };

// 3rd update is here ------------------------------------->


// const DemoRequest = require("../models/DemoRequest");
// const Booking = require("../models/Booking");
// const { Resend } = require("resend");
// const dotenv = require("dotenv");

// dotenv.config();

// // ✅ Initialize Resend API
// const resend = new Resend(process.env.RESEND_API_KEY);

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// exports.getAllBookings = async (req, res) => {
//     try {
//         const bookings = await Booking.find();
//         res.status(200).json(bookings);
//     } catch (error) {
//         console.error("❌ Error fetching bookings:", error);
//         res.status(500).json({ message: "Server error while fetching bookings", error });
//     }
// };

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// exports.getAllDemoRequests = async (req, res) => {
//     try {
//         const demoRequests = await DemoRequest.find();
//         res.status(200).json(demoRequests);
//     } catch (error) {
//         console.error("❌ Error fetching demo requests:", error);
//         res.status(500).json({ message: "Server error while fetching demo requests", error });
//     }
// };

// /**
//  * ✅ Approve or Reject Event Booking & Send Email
//  */
// exports.approveBooking = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body; // Can be "approved" or "rejected"

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const booking = await Booking.findById(id);
//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         if (booking.status === status) {
//             return res.status(200).json({ message: `Booking is already marked as ${status}. No changes made.` });
//         }

//         booking.status = status;
//         await booking.save();

//         // ✅ Send Email Notification using Resend
//         try {
//             await resend.emails.send({
//                 from: "AI Solution <notify@resend.dev>",
//                 to: booking.email,
//                 subject: `Your Event Booking has been ${status}`,
//                 text: `Dear ${booking.name},\n\nYour booking for "${booking.event}" on ${booking.date} has been ${status}.\n\nBest regards,\nAI Solution Team`
//             });
//             console.log(`📧 Email sent to: ${booking.email} (Booking ${status})`);
//         } catch (emailError) {
//             console.error("❌ Failed to send email:", emailError);
//             return res.status(500).json({ message: "Booking updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Booking ${status} successfully`, booking });

//     } catch (error) {
//         console.error("❌ Error updating booking status:", error);
//         res.status(500).json({ message: "Server error while updating booking status", error });
//     }
// };

// /**
//  * ✅ Approve or Reject Demo Request & Send Email Notification
//  */
// exports.approveDemoRequest = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body; // Can be "approved" or "rejected"

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const demoRequest = await DemoRequest.findById(id);
//         if (!demoRequest) {
//             return res.status(404).json({ message: "Demo request not found" });
//         }

//         if (demoRequest.status === status) {
//             return res.status(200).json({ message: `Demo request is already marked as ${status}. No changes made.` });
//         }

//         demoRequest.status = status;
//         await demoRequest.save();

//         // ✅ Send Email Notification using Resend
//         try {
//             await resend.emails.send({
//                 from: "AI Solution <notify@resend.dev>",
//                 to: demoRequest.email,
//                 subject: `Your Demo Request has been ${status}`,
//                 text: `Dear ${demoRequest.name},\n\nYour request for a demo has been ${status}.\n\nBest regards,\nAI Solution Team`
//             });
//             console.log(`📧 Email sent to: ${demoRequest.email} (Demo request ${status})`);
//         } catch (emailError) {
//             console.error("❌ Failed to send email:", emailError);
//             return res.status(500).json({ message: "Demo request updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Demo request ${status} successfully`, demoRequest });

//     } catch (error) {
//         console.error("❌ Error updating demo request status:", error);
//         res.status(500).json({ message: "Server error while updating demo request status", error });
//     }
// };

// 4th time updated ------------------------>

// const DemoRequest = require("../models/DemoRequest");
// const Booking = require("../models/Booking");
// const { Resend } = require("resend");
// const dotenv = require("dotenv");

// dotenv.config();

// // ✅ Initialize Resend API
// const resend = new Resend(process.env.RESEND_API_KEY);

// /**
//  * ✅ Get all event bookings (Admin Only)
//  */
// exports.getAllBookings = async (req, res) => {
//     try {
//         const bookings = await Booking.find();
//         res.status(200).json(bookings);
//     } catch (error) {
//         console.error("❌ Error fetching bookings:", error);
//         res.status(500).json({ message: "Server error while fetching bookings", error });
//     }
// };

// /**
//  * ✅ Get all demo requests (Admin Only)
//  */
// exports.getAllDemoRequests = async (req, res) => {
//     try {
//         const demoRequests = await DemoRequest.find();
//         res.status(200).json(demoRequests);
//     } catch (error) {
//         console.error("❌ Error fetching demo requests:", error);
//         res.status(500).json({ message: "Server error while fetching demo requests", error });
//     }
// };

// /**
//  * ✅ Send Email Notification using Resend API
//  */
// const sendEmailNotification = async (to, subject, text) => {
//     try {
//         const response = await resend.emails.send({
//             from: "AI Solution <notify@resend.dev>",
//             to,
//             subject,
//             text,
//         });

//         console.log(`📧 Email sent to: ${to} | Response:`, response);
//         return response;
//     } catch (error) {
//         console.error(`❌ Failed to send email to ${to}:`, error);
//         throw error; // Rethrow the error for proper handling
//     }
// };

// /**
//  * ✅ Approve or Reject Event Booking & Send Email Notification
//  */
// exports.approveBooking = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const booking = await Booking.findById(id);
//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         if (booking.status === status) {
//             return res.status(200).json({ message: `Booking is already marked as ${status}. No changes made.` });
//         }

//         booking.status = status;
//         await booking.save();

//         // ✅ Send Email Notification
//         try {
//             await sendEmailNotification(
//                 booking.email,
//                 `Your Event Booking has been ${status}`,
//                 `Dear ${booking.name},\n\nYour booking for "${booking.event}" on ${booking.date} has been ${status}.\n\nBest regards,\nAI Solution Team`
//             );
//         } catch (emailError) {
//             return res.status(500).json({ message: "Booking updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Booking ${status} successfully`, booking });

//     } catch (error) {
//         console.error("❌ Error updating booking status:", error);
//         res.status(500).json({ message: "Server error while updating booking status", error });
//     }
// };

// /**
//  * ✅ Approve or Reject Demo Request & Send Email Notification
//  */
// exports.approveDemoRequest = async (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     if (!["approved", "rejected"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status. Use 'approved' or 'rejected'." });
//     }

//     try {
//         const demoRequest = await DemoRequest.findById(id);
//         if (!demoRequest) {
//             return res.status(404).json({ message: "Demo request not found" });
//         }

//         if (demoRequest.status === status) {
//             return res.status(200).json({ message: `Demo request is already marked as ${status}. No changes made.` });
//         }

//         demoRequest.status = status;
//         await demoRequest.save();

//         // ✅ Send Email Notification
//         try {
//             await sendEmailNotification(
//                 demoRequest.email,
//                 `Your Demo Request has been ${status}`,
//                 `Dear ${demoRequest.name},\n\nYour request for a demo has been ${status}.\n\nBest regards,\nAI Solution Team`
//             );
//         } catch (emailError) {
//             return res.status(500).json({ message: "Demo request updated, but email notification failed.", error: emailError });
//         }

//         res.status(200).json({ message: `Demo request ${status} successfully`, demoRequest });

//     } catch (error) {
//         console.error("❌ Error updating demo request status:", error);
//         res.status(500).json({ message: "Server error while updating demo request status", error });
//     }
// };


//  5the time updatede code ---------------------------------->

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
