// app.js
const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/userroutes');
const authRoutes = require('./routes/authroutes');
const protectedRoutes = require('./routes/protectedroute');

app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes); // You had this twice with different base paths
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
