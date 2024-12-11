import React from "react";
import { Link } from "react-router-dom";

const MiniHeader = () => {
  const animationStyle = {
    animation: "moveX 4s ease-in-out infinite",
  };

  return (
    <>
      <div className="container_fluid">
        <div className="row">
         <div className="col-5">
           <ul className="d-flex gap-5"> 
            <li> <Link to='/registration'> Registration </Link>  </li>
            <li>   <Link to='/logout'> logout</Link>    </li>
           </ul>
               
           
                 </div>
          <div className="col-7" style={animationStyle}>
            <Link to='/totalnumberofbidding'>See auction result</Link>   
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes moveX {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(60px);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default MiniHeader;
