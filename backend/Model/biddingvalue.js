const mongoose = require('mongoose');
const Subcategory = require('./subcatagoreymodel');

const biddingvalueSchema = new mongoose.Schema({
   image: {
    type: [String],
   
  },
  name:{
    type:String,
    
  },
  bidprice: {
    type: String,
    
  },
  color:{
    type:String,
  },
  status:{
    type:String
  },
  email:{
    type:String,
  },
  username:{
    type:String,
  },
  
})
const netbiddingvalue = mongoose.model('biddingvalue', biddingvalueSchema);
module.exports = netbiddingvalue;
