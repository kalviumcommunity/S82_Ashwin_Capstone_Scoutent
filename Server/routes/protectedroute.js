const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: `Hello, user ${req.user.id}. This is a protected route.` });
});

module.exports = router;
