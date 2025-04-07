
// ✅ backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ MongoDB connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// ✅ Routes
const adminRoutes = require("./routes/adminRoutes");
const eventRegistrationRoutes = require("./routes/eventRegistrationRoutes");
const demoRequestRoutes = require("./routes/demoRequestRoutes");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const commentRoutes = require("./routes/commentRoutes");
const eventRoutes = require("./routes/eventsRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");

const routes = [
  { path: "/api/admin", route: adminRoutes },
  { path: "/api/event-registrations", route: eventRegistrationRoutes },
  { path: "/api/demo-requests", route: demoRequestRoutes },
  { path: "/api/user", route: userRoutes },
  { path: "/api/services", route: serviceRoutes },
  { path: "/api/comments", route: commentRoutes },
  { path: "/api/events", route: eventRoutes },
  { path: "/api/blogs", route: blogRoutes },
  { path: "/api/contacts", route: contactRoutes },
];

routes.forEach(({ path, route }) => {
  app.use(path, route);
  console.log(`✅ Route Loaded: ${path}`);
});

app.use((req, res) => {
  console.warn(`⚠️ Route Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: "❌ Route not found" });
});

app.use((err, req, res, next) => {
  console.error("❌ Unexpected Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
