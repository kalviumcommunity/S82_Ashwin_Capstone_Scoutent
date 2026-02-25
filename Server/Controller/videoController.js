const Video = require('../Models/videoschema');
// const cloudinary = require('../utils/cloudinary'); // Not needed for upload, maybe for other things if required later
const fs = require('fs'); // Not needed anymore
const path = require('path'); // Not needed for upload

exports.uploadVideo = async (req, res) => {
    console.log("Upload request received");
    try {
        console.log("Files received:", req.files);

        if (!req.files || !req.files['video'] || !req.files['playerImage']) {
            return res.status(400).json({ msg: 'Please upload both a video and a player image.' });
        }

        // With multer-storage-cloudinary, the file is already uploaded.
        // The 'path' property contains the Cloudinary URL.
        const videoUrl = req.files['video'][0].path;
        const playerImageUrl = req.files['playerImage'][0].path;

        console.log("Video uploaded:", videoUrl);
        console.log("Image uploaded:", playerImageUrl);

        // Create Video Document
        const newVideo = new Video({
            title: req.body.playerName + ' - ' + req.body.sport,
            description: req.body.description || '',
            videoUrl: videoUrl,
            thumbnailUrl: videoUrl.replace(/\.[^/.]+$/, ".jpg"), // Simple thumbnail generation
            playerImageUrl: playerImageUrl,
            uploadedBy: req.user.id,
            sport: req.body.sport,
            playerName: req.body.playerName,
            age: req.body.age,
            position: req.body.position,
        });

        await newVideo.save();

        res.status(201).json(newVideo);

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};
