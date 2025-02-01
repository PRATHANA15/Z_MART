const Product = require('../models/productModel'); // Import Product model

exports.createProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    
    const { name, description, price, image, sellerName, sellerContact } = req.body;

    if (!name || !description || !price || !sellerName || !sellerContact || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Ensure price is stored as a number
    const product = new Product({
      name,
      description,
      price: Number(price), 
      image, // Use image from req.body
      sellerName,
      sellerContact,
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};


exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Perform case-insensitive search on name and description
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ message: "Error searching products" });
  }
};






exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};































