const express = require('express');
const router = express.Router();
const registerUser = require('./user_controller');

router.route('/registration').post(registerUser)

module.exports = router;