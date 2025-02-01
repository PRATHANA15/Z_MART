const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // If you're using cookies
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});









