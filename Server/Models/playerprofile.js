
const mongoose = require('mongoose');

const playerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, 
  },
  position: { type: String }, // e.g., Center Back, Striker, Midfielder
  age: { type: Number },
  height: { type: Number }, // in cm
  weight: { type: Number }, // in kg
  dominantFoot: { type: String, enum: ['left', 'right', 'both'] },
  matchesPlayed: { type: Number, default: 0 },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  location: { type: String }, // e.g., city/state for scouting
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PlayerProfile', playerProfileSchema);
