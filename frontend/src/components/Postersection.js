

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Postersection = () => {
    const [weaklyoffer, setWeaklyOffer] = useState([]);
    const [isOutOfStock, setIsOutOfStock] = useState(false);
    const navigate = useNavigate();

    const handlestock = () => {
        setIsOutOfStock(true);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/getweaklyoffer')
            .then((response) => {
                setWeaklyOffer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleWeaklyBid = (id, imageUrl) => {
        navigate(`/weaklyoffer/${id}`, { state: { imageUrl } });
    };

    const backgroundImage = [
        "https://i.etsystatic.com/21220004/r/il/f547a6/4558261215/il_fullxfull.4558261215_sk7z.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOx8XMMBTRgO5ydcx05bFsw8V9yvL4jUGGkIQJDwP2_e6JyEJav0IN6jHjcdLy0eYb3Y&usqp=CAU",
        "https://www.copperbeardjewelry.com/cdn/shop/products/SterlingSilverLeafBranch6mmOpalCabochonFireTurquoiseOP80Ring-2.jpg?v=1641266463",
        "https://houseofjewellery.pk/cdn/shop/products/hoj_img_23.jpg?v=1640606711"
    ];

    return (
        <div className="container overflow-hidden">
            <div className="row">
                <h4 className='text-center bg-primary'>Weakly Ring Auction</h4>
                <div className="col-md-4">
                    <div className="posterimageone d-flex justify-content-center bg-primary align-items-end h-100 w-100">
                        {isOutOfStock ? (
                            <div className="out-of-stock text-danger text-center" style={{ zIndex: 3 }}>
                                <h4 className='text-danger'>Out of Stock</h4>
                            </div>
                        ) : (
                            <div className="posteronetext text-white text-center">
                                <div className="text m-0 p-0">
                                    <span>Current Bid at:</span>
                                    <h3>$9,599</h3>
                                </div>
                                <div className="h4 m-0 p-0">
                                    <h4 className='text-center'>Pure Diamond Ring</h4>
                                </div>
                                <div className="ahref m-0 p-0">
                                    <a style={{ color: "white", textDecoration: "underline" }}>Auction Will Be End:</a>
                                </div>
                                <div className="time m-0 p-0">
                                    <ul className="d-flex justify-content-center gap-3">
                                        <li className="d-flex flex-column align-items-center">
                                            <span>00</span>
                                            <span>days</span>
                                        </li>
                                        <li className="d-flex flex-column align-items-center">
                                            <span>00</span>
                                            <span>hours</span>
                                        </li>
                                        <li className="d-flex flex-column align-items-center">
                                            <span>00</span>
                                            <span>minutes</span>
                                        </li>
                                        <li className="d-flex flex-column align-items-center">
                                            <span>00</span>
                                            <span>seconds</span>
                                        </li>
                                    </ul>
                                    <div className="btn">
                                        <button onClick={handlestock}>Start Bid</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="col-md-8 p-3 mt-4 ">
                    <div className="row ">
                        {weaklyoffer.map((offer, index) => (
                            <div key={offer._id} className="col-md-6" style={{
                                backgroundImage: `url(${backgroundImage[index % backgroundImage.length]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div className="text-white p-0 m-0">
                                    <button className='weaklybidbutton' onClick={() => handleWeaklyBid(offer._id, backgroundImage[index % backgroundImage.length])}>Bid Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postersection;
