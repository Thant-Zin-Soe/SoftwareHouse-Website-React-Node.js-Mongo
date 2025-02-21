// const mongoose = require("mongoose");

// const adminSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, default: "admin" }
// }, { timestamps: true });

// module.exports = mongoose.model("Admin", adminSchema);



const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
    resetPasswordToken: { type: String, default: null } // ✅ Added Reset Password Token Field
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);
