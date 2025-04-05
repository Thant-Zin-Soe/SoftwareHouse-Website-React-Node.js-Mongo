const Service = require("../models/serviceModel");

/**
 * ✅ Get all services
 */
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().populate("comments");
    res.json(services);
  } catch (error) {
    console.error("❌ Error fetching services:", error);
    res.status(500).json({ message: "Server error while fetching services." });
  }
};

/**
 * ✅ Add a new service (with optional image upload)
 */
exports.addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const imageFile = req.file ? req.file.filename : null;

    // ✅ Validation
    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required." });
    }

    // ✅ Prepare service object
    const newService = new Service({
      name,
      description,
      price: price || 0,
      image: imageFile
        ? `/uploads/${imageFile}` // Serve from static folder
        : "https://via.placeholder.com/300" // Fallback image
    });

    // ✅ Save to DB
    await newService.save();

    res.status(201).json({
      message: "✅ Service added successfully",
      service: newService,
    });
  } catch (error) {
    console.error("❌ Error adding service:", error);
    res.status(500).json({ message: "Server error while adding service." });
  }
};
