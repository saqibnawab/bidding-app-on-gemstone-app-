const express = require('express');
const router = express.Router();

const {getweaklyoffer , postweaklyoffer, getsingleweaklyoffer} = require('../controllers/weaklyoffer');


router.get('/getweaklyoffer', getweaklyoffer);
router.post('/postweaklyoffer', postweaklyoffer);
router.get('/getweaklyoffer/:id', getsingleweaklyoffer);

module.exports = router;