// server.js
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API!'); // Response for GET requests to /
});

// Your additional routes for tasks can go here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
