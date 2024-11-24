



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';






const WeaklyAuctiondetail = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const { imageUrl } = location.state || {}; // Access the imageUrl from the location state
    const { id } = useParams();
    const [auctionDetail, setAuctionDetail] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/getweaklyoffer/${id}`)
            .then((response) => {
                setAuctionDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="image">
                        <img src={imageUrl || 'default-image-url'} alt="Auction" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="weaklyofferinfo">
                        {auctionDetail ? (
                            <>
                                <h1 className='mt-5 mb-5'>{auctionDetail.name}</h1>

                                <p>{auctionDetail.description}</p>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Origin</th>
                                            <th scope="col">Color</th>
                                            <th scope="col">Availability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{auctionDetail.origin}</td>
                                            <td>{auctionDetail.color}</td>
                                            <td>{auctionDetail.rarity}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <form className='d-flex mt-4 mb-4'>
                                    <TextField id="outlined-basic" label="bid" placeholder='enter you bid' variant="outlined" fullWidth />
                                    <Button variant="contained">placeBid</Button>

                                </form>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeaklyAuctiondetail;
