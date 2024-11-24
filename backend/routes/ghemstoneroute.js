const express = require('express');
const router = express.Router();
const { getallgemstones, getgemstonebyid, creategemstone, findbycategory, findbystatus, filtergemstones } = require('../controllers/ghemstone');
router.get('/gemstones', getallgemstones);
router.get('/findbystatus/:status', findbystatus)
router.get('/findbycategory/:category', findbycategory)
router.get('/gemstones/:id', getgemstonebyid);    //getting single deatil of auction 
router.post('/creategemstone', creategemstone);
router.get('/filtergemstones', filtergemstones)

module.exports = router;
