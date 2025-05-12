// videoSchema.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  thumbnailUrl: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sport: { type: String, enum: ['football', 'cricket'], required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);
