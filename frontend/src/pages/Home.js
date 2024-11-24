import React from 'react'
import Herosection from '../components/Herosection'
import Homecatogery from '../components/Homecatogery'
import LiveAuction from '../components/LiveAuction'
import Postersection from '../components/Postersection'
import Popularauction from '../components/Popularauction'
import Trendingauction from '../components/Trendingauction'
import FAQ from '../components/FAQ'
import Upcomingauction from '../components/Upcomingauction'
import Auctionmethodology from '../components/Auctionmethodology'
import Auctionmodel from '../components/Auctionmodel'
import Auctionblog from './Auctionblog'
const Home = () => {
  return (
    <div>

      <Herosection />
      <LiveAuction />
      <Homecatogery />
      <Trendingauction />
      <Popularauction />
      <Postersection />
      <Upcomingauction />
      <FAQ />
      <Auctionblog/>
      <Auctionmethodology />
      <Auctionmodel/>

    </div>
  )
}

export default Home
