const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Set up Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "zmart_products", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

// Multer middleware
const upload = multer({ storage });

module.exports = upload;


