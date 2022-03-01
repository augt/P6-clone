const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.emailCheck, userCtrl.passwordCheck, userCtrl.signup);
router.post('/login' , userCtrl.emailCheck, userCtrl.passwordCheck, userCtrl.login);

module.exports = router;