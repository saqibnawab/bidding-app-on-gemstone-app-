import React, { useEffect, useState } from 'react'
import Auctioncard from './Auctioncard'
import axios from 'axios';
const LiveAuction = () => {
  const [liveproduct, setliveproduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/findbystatus/live').then((response) => {
      console.log("live", response.data);
      setliveproduct(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row ">
          <h3 className='text-center'>New Live Auction.</h3>
          <p className='text-center'>Feel free adapt this based on the specific managed services, features</p>
          {
            liveproduct.map((product, index) => {
              return (
                <>
                  <Auctioncard key={index} product={product} colSize={"col-md-3 col-6 mb-4"} />
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default LiveAuction
