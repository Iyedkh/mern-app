const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
const nameRoutes = require('./routes/names.route');
app.use('/names', nameRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
