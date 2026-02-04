const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for your React frontend
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (origin.match(/^http:\/\/localhost:\d+$/)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'), false);
  },
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
