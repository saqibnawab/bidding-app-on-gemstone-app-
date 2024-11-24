import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Auctionmethodology = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6 col-12 mt-3 shadow" style={{ height: "100px", borderRadius: "10px" }}>
            <div className="amtext d-flex flex-column align-items-center justify-content-center">
              <span>How to use</span>
              <h4>How to bid your item</h4>
          <NavLink to='/howtobid' style={{textDecoration:"none"}}> <span><FaArrowTrendUp /> </span></NavLink>    
            </div>
            
          </div>


          <div className="col-md-6 col-12 mt-3 shadow" style={{ height: "100px", borderRadius: "10px" }}>
            <div className="amtext d-flex flex-column align-items-center justify-content-center">
              <span>How to use</span>
              <h4>How to sell your item</h4>
              <NavLink to='/howtosell'  style={{textDecoration:"none"}}> <span><FaArrowTrendUp /> </span></NavLink>   
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auctionmethodology
