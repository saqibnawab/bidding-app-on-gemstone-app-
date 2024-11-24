// Auctioncard.js
import React, { useState, useContext } from 'react';
import { TbLivePhoto } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import CountdownTimer from '../components/CountdownTimer ';
import Auctionmodel from './Auctionmodel';         // Import modal
import MyOffCanvas from './MyOffCanvas';
import { NavLink } from "react-router-dom"
import { Mycontext } from '../context/Appcontext';

const Auctioncard = ({ colSize, product }) => {

      const {addtowishlist}= useContext(Mycontext)

    const [showModal, setShowModal] = useState(false);  // State to control modal
    const [showOffCanvas, setShowOffCanvas] = useState(false);  // State to control off-canvas


    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);



    const handleShowOffCanvas = () => setShowOffCanvas(true);
    const handleCloseOffCanvas = () => setShowOffCanvas(false);



    const timeDifferenceInHours = parseFloat(product?.timeDifference.replace(' hours', ''));
    
    return (
        <>
            <div className={colSize}>
                <div className="card">
                    <NavLink to={`/auctiondetail/${product?._id}`}>
                        <div className="image">
                            <img
                                src={product?.image[0] || "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg"}
                                className="card-img-top mx-auto d-block img-thumbnail img-fluid"
                                alt={product?.name}
                            />
                        </div>
                    </NavLink>
                    <div className="card-body">
                        <div className="mb-3">
                            <CountdownTimer totalHours={timeDifferenceInHours} />
                        </div>
                        <p className="card-text">{product?.name}</p>
                        <div className="carttext d-flex justify-content-between align-items-center">
                            <div className="text d-flex flex-column justify-content-center align-items-center m-0">
                                <div className="currentbid">Current bid at:</div>
                                <div className="bidprice">
                                    <p>{product?.bidprice} PKR</p>
                                </div>
                            </div>
                            <div className="button">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={handleShowOffCanvas}
                                >
                                    Bid now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="status d-flex align-items-center">
                        <span><TbLivePhoto /></span>
                        <span>{product?.status}</span>
                    </div>
                    <div className="carticone d-flex gap-2">
                        {/* When clicking the eye icon, show the modal */}
                        <span className='eye' onClick={handleShow}>
                            <FiEye />
                        </span>
                        <span className='eye'>
                            <FaRegHeart onClick={()=>addtowishlist(product)}/>
                        </span>
                    </div>
                </div>
            </div>

            {/* Render the Auctionmodel component and pass necessary props */}
            <Auctionmodel
                show={showModal}
                handleClose={handleClose}
                product={product}
            />



            <MyOffCanvas
                show={showOffCanvas}
                handleClose={handleCloseOffCanvas}
                product={product}
            />


        </>
    );
};

export default Auctioncard;







