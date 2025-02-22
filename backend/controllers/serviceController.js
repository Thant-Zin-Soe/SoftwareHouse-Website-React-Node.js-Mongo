// const Service = require("../models/serviceModel");

// /**
//  * ✅ Get all services
//  */
// exports.getServices = async (req, res) => {
//     try {
//         const services = await Service.find(); // Fetch all services
//         res.json(services);
//     } catch (error) {
//         console.error("❌ Error fetching services:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// /**
//  * ✅ Add a new service (for admin panel)
//  */
// exports.addService = async (req, res) => {
//     const { name, description, image, price, category } = req.body;

//     try {
//         const newService = new Service({ name, description, image, price, category });
//         await newService.save();
//         res.status(201).json({ message: "✅ Service added successfully", service: newService });
//     } catch (error) {
//         console.error("❌ Error adding service:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };
// const Service = require("../models/Service"); // ✅ Ensure the model exists

// // ✅ Controller function to fetch all services
// exports.getServices = async (req, res) => {
//     try {
//         const services = await Service.find(); // ✅ Fetch services from DB
//         res.json(services);
//     } catch (error) {
//         console.error("❌ Error fetching services:", error);
//         res.status(500).json({ message: "Server error while fetching services." });
//     }
// };



//-----------------------------------------------------------------
const Service = require("../models/serviceModel"); // ✅ Ensure Correct Path

/**
 * ✅ Get all services
 */
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find(); // Fetch all services
        res.json(services);
    } catch (error) {
        console.error("❌ Error fetching services:", error);
        res.status(500).json({ message: "Server error while fetching services." });
    }
};

/**
 * ✅ Add a new service (for admin panel)
 */
exports.addService = async (req, res) => {
    const { name, description, price, image } = req.body;

    try {
        const newService = new Service({
            name,
            description,
            price,
            image: image || "https://via.placeholder.com/300" // ✅ Use default image if none provided
        });

        await newService.save();
        res.status(201).json({ message: "✅ Service added successfully", service: newService });
    } catch (error) {
        console.error("❌ Error adding service:", error);
        res.status(500).json({ message: "Server error while adding service." });
    }
};
