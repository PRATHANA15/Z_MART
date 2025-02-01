const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
//const { createProduct } = require("../controllers/productController");
const { createProduct, searchProducts, getAllProducts} = require("../controllers/productController");

// Create a product (with image upload)
router.post("/", upload.single("image"), createProduct);
// Search for products
router.get("/search", searchProducts);

// Get all products
router.get("/", getAllProducts); 


module.exports = router;
























