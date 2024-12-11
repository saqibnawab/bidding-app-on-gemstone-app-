const express = require('express');
const router = express.Router();
const {
    gettingallbidprice,
    postbiddingprice,
    liveauctionresult,
    trendingauctionresult,
    popularauctionresult,
    upcomingauctionresult } = require('../controllers/biddingprice')
router.post('/biddingprice', postbiddingprice)
router.get('/biddingprice', gettingallbidprice)
router.get('/liveresult', liveauctionresult)
router.get('/trendingresult', trendingauctionresult)
router.get('/popularresult', popularauctionresult)
router.get('/upcomingresult', upcomingauctionresult)

module.exports = router;
