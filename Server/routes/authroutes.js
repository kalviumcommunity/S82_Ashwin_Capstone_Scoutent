const express = require('express');
const router = express.Router();
const { registerUser, loginUser,updatePassword } = require('../Controller/authcontroller');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.put('/password', updatePassword);

module.exports = router;
