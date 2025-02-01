const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: { type: Number, required: true },
  deliveryTime: { type: String, required: true },
  paymentMode: { type: String, required: true },
  phoneNumber: { 
    type: String, 
    required: true, 
    match: /^[0-9]{10}$/, // Validate phone number format
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
