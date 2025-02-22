// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Connection Error:", err));

// const adminRoutes = require("./routes/adminRoutes");

// app.use("/api/admin", adminRoutes);

// app.use((req, res) => res.status(404).json({ message: "❌ Route not found" }));

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));



// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Debugging Database Connection
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");  // <-- Make sure this is here

// // ✅ Use Routes
// app.use("/api/admin", adminRoutes);
// app.use("/api/bookings", bookingRoutes);  
// app.use("/api/demo-requests", demoRequestRoutes);  // <-- Make sure this is included

// // Handle Undefined Routes
// app.use((req, res) => {
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Debugging Database Connection
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Connection Error:", err));

// // Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");

// // Use Routes
// app.use("/api/admin", adminRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/demo-requests", demoRequestRoutes);

// // Handle Undefined Routes
// app.use((req, res) => {
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));



// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Check Required ENV Variables
// if (!process.env.MONGO_URI) {
//     console.error("❌ ERROR: Missing MONGO_URI in .env file!");
//     process.exit(1);
// }
// if (!process.env.JWT_SECRET) {
//     console.error("❌ ERROR: Missing JWT_SECRET in .env file!");
//     process.exit(1);
// }

// // ✅ Debugging Database Connection
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1);  // Stop server if DB connection fails
// });

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");

// // ✅ Load Routes & Log Them
// console.log("🔹 Loading Routes...");
// app.use("/api/admin", adminRoutes);
// console.log("✅ Admin Routes Loaded: /api/admin");
// app.use("/api/bookings", bookingRoutes);
// console.log("✅ Booking Routes Loaded: /api/bookings");
// app.use("/api/demo-requests", demoRequestRoutes);
// console.log("✅ Demo Request Routes Loaded: /api/demo-requests");

// // ❌ Handle Undefined Routes
// app.use((req, res) => {
//     console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//     console.error("❌ Unexpected Server Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

//----------------------------------

// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Check Required ENV Variables
// if (!process.env.MONGO_URI) {
//     console.error("❌ ERROR: Missing MONGO_URI in .env file!");
//     process.exit(1);
// }
// if (!process.env.JWT_SECRET) {
//     console.error("❌ ERROR: Missing JWT_SECRET in .env file!");
//     process.exit(1);
// }

// // ✅ Debugging Database Connection
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1);  // Stop server if DB connection fails
// });

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");
// const userRoutes = require("./routes/userRoutes"); // ✅ Added User Routes

// // ✅ Load Routes & Log Them
// console.log("🔹 Loading Routes...");
// app.use("/api/admin", adminRoutes);
// console.log("✅ Admin Routes Loaded: /api/admin");
// app.use("/api/bookings", bookingRoutes);
// console.log("✅ Booking Routes Loaded: /api/bookings");
// app.use("/api/demo-requests", demoRequestRoutes);
// console.log("✅ Demo Request Routes Loaded: /api/demo-requests");
// app.use("/api/user", userRoutes); // ✅ Added Route for User Authentication
// console.log("✅ User Routes Loaded: /api/user");

// // ❌ Handle Undefined Routes
// app.use((req, res) => {
//     console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//     console.error("❌ Unexpected Server Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

//----------------------------------------
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Check Required ENV Variables
// if (!process.env.MONGO_URI) {
//     console.error("❌ ERROR: Missing MONGO_URI in .env file!");
//     process.exit(1);
// }
// if (!process.env.JWT_SECRET) {
//     console.error("❌ ERROR: Missing JWT_SECRET in .env file!");
//     process.exit(1);
// }

// // ✅ Debugging Database Connection
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1);  // Stop server if DB connection fails
// });

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");
// const userRoutes = require("./routes/userRoutes"); // ✅ Ensure this file exists!

// // ✅ Load Routes & Log Them
// console.log("🔹 Loading Routes...");
// app.use("/api/admin", adminRoutes);
// console.log("✅ Admin Routes Loaded: /api/admin");
// app.use("/api/bookings", bookingRoutes);
// console.log("✅ Booking Routes Loaded: /api/bookings");
// app.use("/api/demo-requests", demoRequestRoutes);
// console.log("✅ Demo Request Routes Loaded: /api/demo-requests");
// app.use("/api/user", userRoutes); // ✅ Now properly handling user login
// console.log("✅ User Routes Loaded: /api/user");

// // ❌ Handle Undefined Routes
// app.use((req, res) => {
//     console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//     console.error("❌ Unexpected Server Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
//----------------------------------------------------------------------------------------------------------

// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Check Required ENV Variables
// if (!process.env.MONGO_URI) {
//     console.error("❌ ERROR: Missing MONGO_URI in .env file!");
//     process.exit(1);
// }
// if (!process.env.JWT_SECRET) {
//     console.error("❌ ERROR: Missing JWT_SECRET in .env file!");
//     process.exit(1);
// }

// // ✅ Connect to MongoDB
// mongoose.set("strictQuery", false);
// console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => {
//     console.error("❌ MongoDB Connection Error:", err);
//     process.exit(1);  // Stop server if DB connection fails
// });

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");
// const userRoutes = require("./routes/userRoutes"); 
// const serviceRoutes = require("./routes/serviceRoutes"); // ✅ Added AI Services Route

// // ✅ Load Routes & Log Them
// console.log("🔹 Loading Routes...");
// app.use("/api/admin", adminRoutes);
// console.log("✅ Admin Routes Loaded: /api/admin");
// app.use("/api/bookings", bookingRoutes);
// console.log("✅ Booking Routes Loaded: /api/bookings");
// app.use("/api/demo-requests", demoRequestRoutes);
// console.log("✅ Demo Request Routes Loaded: /api/demo-requests");
// app.use("/api/user", userRoutes); 
// console.log("✅ User Routes Loaded: /api/user");
// app.use("/api/services", serviceRoutes); // ✅ AI Services Routes Registered
// console.log("✅ Service Routes Loaded: /api/services");

// // ❌ Handle Undefined Routes
// app.use((req, res) => {
//     console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
//     res.status(404).json({ message: "❌ Route not found" });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//     console.error("❌ Unexpected Server Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


//-------------------------------------------------------------------------------------------------------------


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Check Required ENV Variables
if (!process.env.MONGO_URI) {
    console.error("❌ ERROR: Missing MONGO_URI in .env file!");
    process.exit(1);
}
if (!process.env.JWT_SECRET) {
    console.error("❌ ERROR: Missing JWT_SECRET in .env file!");
    process.exit(1);
}

// ✅ Connect to MongoDB
mongoose.set("strictQuery", false);
console.log("🟢 Connecting to Database:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);  // Stop server if DB connection fails
});

// ✅ Import Routes
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const demoRequestRoutes = require("./routes/demoRequestRoutes");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes"); // ✅ AI Services Route

// ✅ Register Routes with Logging
const routes = [
    { path: "/api/admin", route: adminRoutes },
    { path: "/api/bookings", route: bookingRoutes },
    { path: "/api/demo-requests", route: demoRequestRoutes },
    { path: "/api/user", route: userRoutes },
    { path: "/api/services", route: serviceRoutes }
];

console.log("🔹 Loading Routes...");
routes.forEach(({ path, route }) => {
    app.use(path, route);
    console.log(`✅ Route Loaded: ${path}`);
});

// ❌ Handle Undefined Routes
app.use((req, res) => {
    console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: "❌ Route not found" });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
    console.error("❌ Unexpected Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


