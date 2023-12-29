const express = require('express');
const router = express.Router();
const registerUser = require('./user_controller');

router.route('/working').post(registerUser)

module.exports = router;