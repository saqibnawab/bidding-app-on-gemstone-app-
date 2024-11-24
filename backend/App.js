const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


// midleware
app.use(express.json()); 
app.use(cors());
//connectin database
const dbconnect = require('./utils/index');
// import routes
const subcatagorey = require('./routes/subcatagoreyroute');
const heroimage = require('./routes/heroimage');
const gemstone = require('./routes/ghemstoneroute');
const auctionblog = require('./routes/Auctionblogroute');
const weaklyoffer = require('./routes/weaklyofferroute');
const user = require('./routes/userroute');
 
app.use('/', subcatagorey);
app.use('/', heroimage);
app.use('/', gemstone);
app.use('/', auctionblog);
app.use('/', weaklyoffer);
app.use('/', user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});