const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const { items, deliveryTime, paymentMode, phoneNumber } = req.body;

    if (!items || !deliveryTime || !paymentMode || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const order = new Order({
      items,
      deliveryTime,
      paymentMode,
      phoneNumber,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order' });
  }
};
