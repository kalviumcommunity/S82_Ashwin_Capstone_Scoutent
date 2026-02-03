const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for your React frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Routes
const userRoutes = require('./routes/userroutes');
const authRoutes = require('./routes/authroutes');
const protectedRoutes = require('./routes/protectedroute');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
