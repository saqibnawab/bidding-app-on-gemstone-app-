const express = require('express');
const router = express.Router();
const { getAllHeroimage, createHeroimage } = require('../controllers/heroimage');
router.get('/getAllHeroimage', getAllHeroimage);
router.post('/createHeroimage', createHeroimage);
module.exports = router;
