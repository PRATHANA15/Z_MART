const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/', orderController.createOrder);

// Parse JSON data
router.use(express.json());

module.exports = router;
