/*// Backend Code (Node.js/Express): userRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;*/












const express = require('express');
const { signup, login, getProfile } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', getProfile); // Fetch profile without authentication middleware

module.exports = router;


























