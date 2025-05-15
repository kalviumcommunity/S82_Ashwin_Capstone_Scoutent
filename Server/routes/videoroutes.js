
const express = require('express');
const router = express.Router();
const Video = require('../Models/video');
const auth = require('../middleware/auth');

router.post('/upload', auth, async (req, res) => {
  const { title, url } = req.body;

  try {
    const newVideo = new Video({ title, url, uploadedBy: req.user.id });
    await newVideo.save();
    res.status(201).json({ message: 'Video uploaded', video: newVideo });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});
