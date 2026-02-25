const express = require('express');
const router = express.Router();
const videoController = require('../Controller/videoController');
const auth = require('../Middleware/authMiddleware');
const { upload } = require('../utils/cloudinary');

// Route: POST /api/videos/upload
// Description: Upload a video and player details
// Access: Private (Player)
router.post('/upload', auth, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'playerImage', maxCount: 1 }]), videoController.uploadVideo);

module.exports = router;
