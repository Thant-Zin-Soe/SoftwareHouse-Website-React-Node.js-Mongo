// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");

// dotenv.config();

// const app = express();

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Serve static files from /uploads folder (IMPORTANT: Must be before 404 route)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
//     .then(() => console.log("✅ MongoDB Connected Successfully"))
//     .catch(err => {
//         console.error("❌ MongoDB Connection Error:", err);
//         process.exit(1);  // Stop server if DB connection fails
//     });

// // ✅ Import Routes
// const adminRoutes = require("./routes/adminRoutes");
// const eventRegistrationRoutes = require("./routes/eventRegistrationRoutes");
// const demoRequestRoutes = require("./routes/demoRequestRoutes");
// const userRoutes = require("./routes/userRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
// const commentRoutes = require("./routes/commentRoutes");
// const eventRoutes = require("./routes/eventsRoutes");
// const blogRoutes = require("./routes/blogRoutes"); // ✅ Blog routes

// // ✅ Register Routes with Logging
// const routes = [
//     { path: "/api/admin", route: adminRoutes },
//     { path: "/api/event-registrations", route: eventRegistrationRoutes },
//     { path: "/api/demo-requests", route: demoRequestRoutes },
//     { path: "/api/user", route: userRoutes },
//     { path: "/api/services", route: serviceRoutes },
//     { path: "/api/comments", route: commentRoutes },
//     { path: "/api/events", route: eventRoutes },
//     { path: "/api/blogs", route: blogRoutes } // ✅ Register blog API
// ];

// console.log("🔹 Loading Routes...");
// routes.forEach(({ path, route }) => {
//     app.use(path, route);
//     console.log(`✅ Route Loaded: ${path}`);
// });

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


// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Serve static files from /uploads folder (for images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
        process.exit(1);
    });

// ✅ Import Routes
const adminRoutes = require("./routes/adminRoutes");
const eventRegistrationRoutes = require("./routes/eventRegistrationRoutes");
const demoRequestRoutes = require("./routes/demoRequestRoutes");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const commentRoutes = require("./routes/commentRoutes");
const eventRoutes = require("./routes/eventsRoutes");
const blogRoutes = require("./routes/blogRoutes"); // ✅ Blog routes

// ✅ Register Routes
const routes = [
    { path: "/api/admin", route: adminRoutes },
    { path: "/api/event-registrations", route: eventRegistrationRoutes },
    { path: "/api/demo-requests", route: demoRequestRoutes },
    { path: "/api/user", route: userRoutes },
    { path: "/api/services", route: serviceRoutes },
    { path: "/api/comments", route: commentRoutes },
    { path: "/api/events", route: eventRoutes },
    { path: "/api/blogs", route: blogRoutes } // ✅ Register blog API
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
