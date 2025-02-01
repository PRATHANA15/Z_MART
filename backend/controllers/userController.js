/*// Backend Code (Node.js/Express): userController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in.' });
  }
};*/



















const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate a token (optional but useful for session tracking)
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful.', token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in.' });
  }
};

// Fetch user profile without authentication middleware
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.query; // Get userId from query params
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const user = await User.findById(userId).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile.' });
  }
};














