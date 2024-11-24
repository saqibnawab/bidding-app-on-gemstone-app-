const express = require('express');
const router = express.Router();

const {getBlogs,createBlog,getsingleblog} = require('../controllers/Auctionblog')

router.get('/blog',getBlogs)
router.get('/getsingleblog/:id',getsingleblog)
router.post('/blog',createBlog)
module.exports = router;