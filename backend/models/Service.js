// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, default: "https://via.placeholder.com/300" }, // ✅ Default Image
// });

// module.exports = mongoose.model("Service", serviceSchema);


// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true }, // ✅ Added price field
//     image: { type: String, default: "https://via.placeholder.com/300" }, // ✅ Default Image
// }, { timestamps: true }); // ✅ Added timestamps for record keeping

// module.exports = mongoose.model("Service", serviceSchema);

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // ✅ Ensure price is a Number
    image: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s" } // ✅ Default Image
});

module.exports = mongoose.model("Service", serviceSchema);
