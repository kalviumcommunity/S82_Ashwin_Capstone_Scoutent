const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app'); // import your configured app with routes

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.setTimeout(300000); // 5 minutes timeout for uploads
