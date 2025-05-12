const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fromScout: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toPlayer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
