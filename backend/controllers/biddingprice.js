const netbiddingvalue = require('../Model/biddingvalue');


const gettingallbidprice = async (req, res) => {
    try {
      console.log("getting all data .......")
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
const postbiddingprice = async (req, res) => {
     const {updatedData}= req.body
     
    try {
        
         console.log(updatedData)
         const newdata = await netbiddingvalue.create(updatedData)
         await  newdata.save()
         res.status(200).json({ success: true, message: "data saved successfully" , newdata});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
      
    }
}

const liveauctionresult = async (req, res) => {
  try {
    const bids = await netbiddingvalue.find({ status: "live" });
    res.status(200).json({ success: true, bids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
const trendingauctionresult = async (req, res) => {
  try {
    const bids = await netbiddingvalue.find({ status: "trending" });
    res.status(200).json({ success: true, bids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
const popularauctionresult = async (req, res) => {
  try {
    const bids = await netbiddingvalue.find({ status: "popular" });
    res.status(200).json({ success: true, bids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
const upcomingauctionresult = async (req, res) => {
  try {
    const bids = await netbiddingvalue.find({ status: "upcoming" });
    res.status(200).json({ success: true, bids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = {
  gettingallbidprice,
  postbiddingprice,
  liveauctionresult,
  trendingauctionresult,
  popularauctionresult,
  upcomingauctionresult,
};


