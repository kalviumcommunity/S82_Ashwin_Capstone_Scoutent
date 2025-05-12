const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['player', 'scout'], required: true },
  bio: { type: String },
  sport: { type: String, enum: ['football', 'cricket'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
