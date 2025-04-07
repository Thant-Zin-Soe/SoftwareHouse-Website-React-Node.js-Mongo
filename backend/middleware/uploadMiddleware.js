const multer = require("multer");
const path = require("path");

// ✅ Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// ✅ File filter (images and Word docs)
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = /jpeg|jpg|png|gif/;
  const allowedDocTypes = /doc|docx/;
  const ext = path.extname(file.originalname).toLowerCase().substring(1); // remove the dot

  if (allowedImageTypes.test(ext) || allowedDocTypes.test(ext)) {
    cb(null, true);
  } else {
    cb("Only image (jpeg, jpg, png, gif) and Word (.doc, .docx) files are allowed", false);
  }
};

// ✅ Export multer instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
