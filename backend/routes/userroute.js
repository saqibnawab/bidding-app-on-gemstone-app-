const express = require('express');
const router = express.Router();
const { getusers, createUser,login } = require('../controllers/user');
router.get('/getuser', getusers);
router.post('/createuser', createUser);
router.post('/login',login);
module.exports = router;