// const express = require("express");
// const { loginAdmin, forgotPassword } = require("../controllers/userController");

// const router = express.Router();

// /**
//  * ✅ Admin Login Route
//  * @route POST /api/user/login
//  */
// router.post("/login", loginAdmin);

// /**
//  * ✅ Forgot Password Route
//  * @route POST /api/user/forgot-password
//  */
// router.post("/forgot-password", forgotPassword);

// module.exports = router;
//------------------------------------------



// const express = require("express"); 
// const { loginAdmin, forgotPassword, resetPassword } = require("../controllers/userController"); // ✅ Import resetPassword function

// const router = express.Router();

// /**
//  * ✅ Admin Login Route
//  * @route POST /api/user/login
//  */
// router.post("/login", loginAdmin);

// /**
//  * ✅ Forgot Password Route
//  * @route POST /api/user/forgot-password
//  * @desc Sends a password reset link to the admin's email
//  */
// router.post("/forgot-password", forgotPassword);

// /**
//  * ✅ Reset Password Route
//  * @route POST /api/user/reset-password
//  * @desc Allows admin to set a new password using a reset token
//  */
// router.post("/reset-password", resetPassword);

// module.exports = router;
//--------------------------------------------------


const express = require("express"); 
const { loginAdmin, forgotPassword, resetPassword } = require("../controllers/userController");

const router = express.Router();

/**
 * ✅ Admin Login Route
 * @route POST /api/user/login
 */
router.post("/login", loginAdmin);

/**
 * ✅ Forgot Password Route
 * @route POST /api/user/forgot-password
 */
router.post("/forgot-password", forgotPassword);

/**
 * ✅ Reset Password Route
 * @route POST /api/user/reset-password
 */
router.post("/reset-password", resetPassword);

module.exports = router;
