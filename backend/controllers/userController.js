// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();

// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) return res.status(401).json({ message: "Admin not found" });

//         const isMatch = await bcrypt.compare(password, admin.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         res.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role } });

//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };
//------------------------------

// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email); // Debugging Log

//         // ✅ Validate Input
//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         // ✅ Find Admin in Database
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             console.log("❌ Admin not found:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Compare Passwords
//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect Password:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         console.log("✅ Login Successful:", email);
//         res.json({
//             token,
//             admin: { id: admin._id, email: admin.email, role: admin.role }
//         });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };
//--------------------------------------------------------------------
// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email); // Debugging Log

//         // ✅ Validate Input
//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         // ✅ Find Admin in Database
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             console.log("❌ Admin not found:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Compare Passwords
//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect Password:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         console.log("✅ Login Successful:", email);
//         res.json({
//             token,
//             admin: { id: admin._id, email: admin.email, role: admin.role }
//         });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password (Send Reset Link)
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         // ✅ Check if Admin Exists
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Link (Mocked for Now)
//         const resetLink = `http://localhost:3000/reset-password?email=${email.trim()}`;

//         console.log("📧 Password Reset Link:", resetLink);
        
//         // TODO: Implement Email Sending with SendGrid or Resend
//         res.json({ message: "Password reset link sent to email.", resetLink });

//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

//------------------------------------------------------------
// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email); // Debugging Log

//         // ✅ Validate Input
//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         // ✅ Find Admin in Database
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             console.log("❌ Admin not found:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Compare Passwords
//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect Password:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         console.log("✅ Login Successful:", email);
//         res.json({
//             token,
//             admin: { id: admin._id, email: admin.email, role: admin.role }
//         });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password (Send Reset Link)
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         // ✅ Check if Admin Exists
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Token (Mocked for Now)
//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

//         console.log("📧 Password Reset Link:", resetLink);
        
//         // TODO: Implement Email Sending with SendGrid or Resend
//         res.json({ message: "Password reset link sent to email.", resetLink });

//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

//------------------------------------------------------------

// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");

// dotenv.config();

// /**
//  * ✅ Configure Nodemailer Transporter (Ensure your .env file is properly set up)
//  */
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Your Gmail Email
//         pass: process.env.EMAIL_PASS  // App Password (not your email password)
//     }
// });

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email); // Debugging Log

//         // ✅ Validate Input
//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         // ✅ Find Admin in Database
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             console.log("❌ Admin not found:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Compare Passwords
//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect Password:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         console.log("✅ Login Successful:", email);
//         res.json({
//             token,
//             admin: { id: admin._id, email: admin.email, role: admin.role }
//         });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password - Generates Reset Token & Sends Email
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         // ✅ Check if Admin Exists
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Token (expires in 15 minutes)
//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         // ✅ Save Token in Database (Optional)
//         admin.resetPasswordToken = resetToken;
//         await admin.save();

//         // ✅ Construct Reset Link
//         const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

//         // ✅ Send Reset Email
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: admin.email,
//             subject: "Reset Your Password",
//             text: `Click the link below to reset your password:\n\n${resetLink}\n\nThis link expires in 15 minutes.`
//         };

//         await transporter.sendMail(mailOptions);

//         res.json({ message: "Password reset link sent to your email.", resetLink });
//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

// /**
//  * ✅ Reset Password - Updates Password in Database
//  */
// exports.resetPassword = async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         // ✅ Verify Token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const admin = await Admin.findById(decoded.id);
//         if (!admin) {
//             return res.status(400).json({ message: "Invalid token or user does not exist." });
//         }

//         // ✅ Hash & Update Password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         admin.password = hashedPassword;
//         admin.resetPasswordToken = null; // ✅ Remove used token
//         await admin.save();

//         res.json({ message: "Password successfully reset. You can now log in." });
//     } catch (error) {
//         console.error("❌ Reset Password Error:", error);
//         res.status(400).json({ message: "Invalid or expired token." });
//     }
// };
//------------------------------------------



// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");

// dotenv.config();

// /**
//  * ✅ Configure Nodemailer Transporter (Ensure your .env file is properly set up)
//  */
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Your Gmail Email
//         pass: process.env.EMAIL_PASS  // App Password (not your email password)
//     }
// });

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email); // Debugging Log

//         // ✅ Validate Input
//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         // ✅ Find Admin in Database
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             console.log("❌ Admin not found:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Compare Passwords
//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             console.log("❌ Incorrect Password:", email);
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // ✅ Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         console.log("✅ Login Successful:", email);
//         res.json({
//             token,
//             admin: { id: admin._id, email: admin.email, role: admin.role }
//         });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password - Generates Reset Token & Sends Email
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         // ✅ Check if Admin Exists
//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Token (expires in 15 minutes)
//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         // ✅ Save Token in Database (Optional for better tracking)
//         admin.resetPasswordToken = resetToken;
//         await admin.save();

//         // ✅ Construct Reset Link
//         const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

//         // ✅ Send Reset Email
//         const mailOptions = {
//             from: `"AI Solutions" <${process.env.EMAIL_USER}>`,
//             to: admin.email,
//             subject: "Reset Your Password - AI Solutions",
//             html: `
//                 <h3>Hello,</h3>
//                 <p>You requested to reset your password.</p>
//                 <p>Click the link below to reset your password:</p>
//                 <a href="${resetLink}" style="display:inline-block; padding:10px 15px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
//                     Reset Password
//                 </a>
//                 <p><strong>Note:</strong> This link will expire in 15 minutes.</p>
//                 <p>If you didn't request this, you can ignore this email.</p>
//                 <p>Regards,</p>
//                 <p><strong>AI Solutions Team</strong></p>
//             `
//         };

//         await transporter.sendMail(mailOptions);

//         res.json({ message: "✅ Password reset link sent to your email.", resetLink });
//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

// /**
//  * ✅ Reset Password - Updates Password in Database
//  */
// exports.resetPassword = async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         // ✅ Verify Token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const admin = await Admin.findById(decoded.id);
//         if (!admin) {
//             return res.status(400).json({ message: "Invalid token or user does not exist." });
//         }

//         // ✅ Hash & Update Password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         admin.password = hashedPassword;
//         admin.resetPasswordToken = null; // ✅ Remove used token
//         await admin.save();

//         res.json({ message: "✅ Password successfully reset. You can now log in." });
//     } catch (error) {
//         console.error("❌ Reset Password Error:", error);
//         res.status(400).json({ message: "Invalid or expired token." });
//     }
// };
//-------------------------------



// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");

// dotenv.config();

// /**
//  * ✅ Configure Nodemailer Transporter
//  */
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Gmail account
//         pass: process.env.EMAIL_PASS  // App Password
//     }
// });

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email);

//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role } });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password - Sends Reset Email
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         // Save reset token in DB (Optional)
//         admin.resetPasswordToken = resetToken;
//         await admin.save();

//         const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

//         const mailOptions = {
//             from: `"AI Solutions" <${process.env.EMAIL_USER}>`,
//             to: admin.email,
//             subject: "🔒 Reset Your Password - AI Solutions",
//             html: `
//                 <h3>Hello,</h3>
//                 <p>You requested to reset your password.</p>
//                 <p>Click the link below to reset your password:</p>
//                 <a href="${resetLink}" style="display:inline-block; padding:10px 15px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
//                     Reset Password
//                 </a>
//                 <p><strong>Note:</strong> This link will expire in 15 minutes.</p>
//                 <p>If you didn't request this, you can ignore this email.</p>
//                 <p>Regards,</p>
//                 <p><strong>AI Solutions Team</strong></p>
//             `
//         };

//         await transporter.sendMail(mailOptions);

//         res.json({ message: "✅ Password reset link sent to your email.", resetLink });

//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

// /**
//  * ✅ Reset Password - Updates Password
//  */
// exports.resetPassword = async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const admin = await Admin.findById(decoded.id);
//         if (!admin) {
//             return res.status(400).json({ message: "Invalid token or user does not exist." });
//         }

//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         admin.password = hashedPassword;
//         admin.resetPasswordToken = null; // ✅ Remove used token
//         await admin.save();

//         res.json({ message: "✅ Password successfully reset. You can now log in." });

//     } catch (error) {
//         console.error("❌ Reset Password Error:", error);
//         res.status(400).json({ message: "Invalid or expired token." });
//     }
// };

//----------------------------

// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");

// dotenv.config();

// /**
//  * ✅ Configure Nodemailer Transporter with TLS Fix
//  */
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Gmail account
//         pass: process.env.EMAIL_PASS  // Gmail App Password
//     },
//     tls: {
//         rejectUnauthorized: false // ✅ FIX: Prevents "self-signed certificate" error
//     }
// });

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email);

//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role } });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };


// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Token (expires in 15 minutes)
//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         console.log("🔑 Generated Reset Token:", resetToken);

//         // ✅ Store Reset Token in MongoDB
//         admin.resetPasswordToken = resetToken;
//         await admin.save(); // ✅ THIS IS THE FIXED PART

//         console.log("✅ Reset Token Stored in MongoDB Successfully");

//         const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

//         // ✅ Send Reset Email
//         const mailOptions = {
//             from: `"AI Solutions" <${process.env.EMAIL_USER}>`,
//             to: admin.email,
//             subject: "🔒 Reset Your Password - AI Solutions",
//             html: `
//                 <h3>Hello,</h3>
//                 <p>You requested to reset your password.</p>
//                 <p>Click the link below to reset your password:</p>
//                 <a href="${resetLink}" style="display:inline-block; padding:10px 15px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
//                     Reset Password
//                 </a>
//                 <p><strong>Note:</strong> This link will expire in 15 minutes.</p>
//                 <p>If you didn't request this, you can ignore this email.</p>
//                 <p>Best regards,</p>
//                 <p><strong>AI Solutions Team</strong></p>
//             `
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("📧 Reset Email Sent Successfully");

//         res.json({ message: "✅ Password reset link sent to your email.", resetLink });

//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };





// exports.resetPassword = async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         console.log("🔍 Verifying Reset Token:", token);
        
//         // ✅ Verify Token (Handle Expiry)
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("✅ Token Decoded:", decoded);

//         // ✅ Find Admin by ID
//         const admin = await Admin.findById(decoded.id);
//         if (!admin) {
//             console.error("❌ Admin Not Found for Token:", decoded.id);
//             return res.status(400).json({ message: "Invalid token or user does not exist." });
//         }

//         // ✅ Compare Token with DB (Ensuring it's the latest one)
//         if (!admin.resetPasswordToken || admin.resetPasswordToken !== token) {
//             console.error("❌ Token mismatch with DB record");
//             return res.status(400).json({ message: "Invalid or expired token." });
//         }

//         // ✅ Hash & Update Password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         admin.password = hashedPassword;
//         admin.resetPasswordToken = null; // ✅ Clear token after use
//         await admin.save();

//         console.log("✅ Password Successfully Reset");
//         res.json({ message: "✅ Password successfully reset. You can now log in." });

//     } catch (error) {
//         console.error("❌ Reset Password Error:", error);
//         res.status(400).json({ message: "Invalid or expired token." });
//     }
// };

//-------------------------------------------------------------



// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");

// dotenv.config();

// /**
//  * ✅ Configure Nodemailer Transporter with TLS Fix
//  */
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Gmail account
//         pass: process.env.EMAIL_PASS  // Gmail App Password
//     },
//     tls: {
//         rejectUnauthorized: false // ✅ FIX: Prevents "self-signed certificate" error
//     }
// });

// /**
//  * ✅ Admin Login Function
//  */
// exports.loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log("📥 Admin Login Attempt:", email);

//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required." });
//         }

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const isMatch = await bcrypt.compare(password.trim(), admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         const token = jwt.sign(
//             { id: admin._id, role: admin.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role } });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ message: "Server error. Please try again later." });
//     }
// };

// /**
//  * ✅ Forgot Password - Sends Reset Email
//  */
// exports.forgotPassword = async (req, res) => {
//     const { email } = req.body;

//     try {
//         console.log("📥 Forgot Password Attempt:", email);

//         const admin = await Admin.findOne({ email: email.trim() });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin email not found." });
//         }

//         // ✅ Generate Password Reset Token (expires in 15 minutes)
//         const resetToken = jwt.sign(
//             { id: admin._id },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m" }
//         );

//         console.log("🔑 Generated Reset Token:", resetToken);

//         // ✅ Store Reset Token in MongoDB
//         admin.resetPasswordToken = resetToken;
//         await admin.save(); // ✅ THIS IS THE FIXED PART

//         console.log("✅ Reset Token Stored in MongoDB Successfully");

//         const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

//         // ✅ Send Reset Email
//         const mailOptions = {
//             from: `"AI Solutions" <${process.env.EMAIL_USER}>`,
//             to: admin.email,
//             subject: "🔒 Reset Your Password - AI Solutions",
//             html: `
//                 <h3>Hello,</h3>
//                 <p>You requested to reset your password.</p>
//                 <p>Click the link below to reset your password:</p>
//                 <a href="${resetLink}" style="display:inline-block; padding:10px 15px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
//                     Reset Password
//                 </a>
//                 <p><strong>Note:</strong> This link will expire in 15 minutes.</p>
//                 <p>If you didn't request this, you can ignore this email.</p>
//                 <p>Best regards,</p>
//                 <p><strong>AI Solutions Team</strong></p>
//             `
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("📧 Reset Email Sent Successfully");

//         res.json({ message: "✅ Password reset link sent to your email.", resetLink });

//     } catch (error) {
//         console.error("❌ Forgot Password Error:", error);
//         res.status(500).json({ message: "Server error while processing request." });
//     }
// };

// /**
//  * ✅ Reset Password - Updates Password
//  */
// exports.resetPassword = async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         console.log("🔍 Verifying Reset Token:", token);
        
//         // ✅ Verify Token (Handle Expiry)
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("✅ Token Decoded:", decoded);

//         // ✅ Find Admin by ID and Check Token
//         const admin = await Admin.findOne({ _id: decoded.id, resetPasswordToken: token });
//         if (!admin) {
//             console.error("❌ Invalid or expired token.");
//             return res.status(400).json({ message: "Invalid or expired token." });
//         }

//         // ✅ Hash & Update Password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         admin.password = hashedPassword;
//         admin.resetPasswordToken = null; // ✅ Clear token after use
//         await admin.save();

//         console.log("✅ Password Successfully Reset");
//         res.json({ message: "✅ Password successfully reset. You can now log in." });

//     } catch (error) {
//         console.error("❌ Reset Password Error:", error);
//         res.status(400).json({ message: "Invalid or expired token." });
//     }
// };


//----------------------------------------------------



const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

/**
 * ✅ Configure Nodemailer Transporter with TLS Fix
 */
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Gmail account
        pass: process.env.EMAIL_PASS  // Gmail App Password
    },
    tls: {
        rejectUnauthorized: false // ✅ FIX: Prevents "self-signed certificate" error
    }
});

/**
 * ✅ Admin Login Function
 */
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log("📥 Admin Login Attempt:", email);

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const admin = await Admin.findOne({ email: email.trim() });
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const isMatch = await bcrypt.compare(password.trim(), admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token, admin: { id: admin._id, email: admin.email, role: admin.role } });

    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};


/**
 * ✅ Forgot Password - Generates Reset Token & Sends Email
 */
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        console.log("📥 Forgot Password Attempt:", email);

        const admin = await Admin.findOne({ email: email.trim() });
        if (!admin) {
            return res.status(404).json({ message: "Admin email not found." });
        }

        // ✅ Generate Password Reset Token (expires in 15 minutes)
        const resetToken = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        console.log("🔑 Generated Reset Token:", resetToken);

        // ✅ Store Reset Token in MongoDB
        admin.resetPasswordToken = resetToken;
        await admin.save(); // ✅ THIS IS THE FIXED PART

        console.log("✅ Reset Token Stored in MongoDB Successfully:", resetToken);

        const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

        // ✅ Send Reset Email
        const mailOptions = {
            from: `"AI Solutions" <${process.env.EMAIL_USER}>`,
            to: admin.email,
            subject: "🔒 Reset Your Password - AI Solutions",
            html: `
                <h3>Hello,</h3>
                <p>You requested to reset your password.</p>
                <p>Click the link below to reset your password:</p>
                <a href="${resetLink}" style="display:inline-block; padding:10px 15px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">
                    Reset Password
                </a>
                <p><strong>Note:</strong> This link will expire in 15 minutes.</p>
                <p>If you didn't request this, you can ignore this email.</p>
                <p>Best regards,</p>
                <p><strong>AI Solutions Team</strong></p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("📧 Reset Email Sent Successfully");

        res.json({ message: "✅ Password reset link sent to your email.", resetLink });

    } catch (error) {
        console.error("❌ Forgot Password Error:", error);
        res.status(500).json({ message: "Server error while processing request." });
    }
};


/**
 * ✅ Reset Password - Updates Password
 */
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        console.log("🔍 Received Reset Token:", token);
        
        // ✅ Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Token Decoded:", decoded);

        // ✅ Find Admin by ID
        const admin = await Admin.findById(decoded.id);
        if (!admin) {
            console.error("❌ Admin Not Found for Token:", decoded.id);
            return res.status(400).json({ message: "Invalid token or user does not exist." });
        }

        // ✅ Compare Token with DB
        console.log("🛠 DB Stored Token:", admin.resetPasswordToken);
        if (!admin.resetPasswordToken || admin.resetPasswordToken !== token) {
            console.error("❌ Token mismatch with DB record");
            return res.status(400).json({ message: "Invalid or expired token." });
        }

        // ✅ Hash & Update Password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedPassword;
        admin.resetPasswordToken = null; // ✅ Clear token after use
        await admin.save();

        console.log("✅ Password Successfully Reset");
        res.json({ message: "✅ Password successfully reset. You can now log in." });

    } catch (error) {
        console.error("❌ Reset Password Error:", error);
        res.status(400).json({ message: "Invalid or expired token." });
    }
};
