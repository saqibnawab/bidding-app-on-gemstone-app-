import React, { useEffect, useState } from 'react';
import { FaCcVisa, FaCcPaypal, FaAmazonPay } from 'react-icons/fa';
import { CiCircleQuestion, CiHeart } from 'react-icons/ci';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Auctioncard from '../components/Auctioncard';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const Auctiondetailpage = () => {
    const { id } = useParams();
    const [singelauctiondetail, setSingelauctiondetail] = useState({});
    const [image, setImage] = useState('');
    const [value, setValue] = useState('1');
    const [bid, setBid] = useState('');


    const [relatedcategory, setrelatedcategory] = useState([]);

    useEffect(() => {

        window.scroll(0, 0);
        axios.get(`http://localhost:5000/gemstones/${id}`)
            .then((response) => {

                setSingelauctiondetail(response.data);
                // Set the first image as the default image
                if (response.data.image && response.data.image.length > 0) {
                    setImage(response.data.image[0]);
                }
                // Set the bid state to the initial bid price from the response
                setBid(response.data.bidprice || '');
            })
            .catch((err) => console.log(err));

    }, [id]);

    useEffect(() => {
        if (singelauctiondetail.category) {
            axios.get(`http://localhost:5000/findbycategory/${singelauctiondetail.category}`)
                .then((res) => {
                    setrelatedcategory(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [singelauctiondetail.category]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const incrementBid = () => {
        setBid((prevBid) => (parseInt(prevBid) + 1).toString());
    };

    const decrementBid = () => {
        setBid((prevBid) => {
            const newBid = parseInt(prevBid) - 1;
            return newBid > 0 ? newBid.toString() : '0'; // Ensure bid is not negative
        });
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image">
                            <div className="row">
                                <div className="col-12">
                                    <img src={image} className="w-100 img-fluid img-thumbnail" alt="" style={{ width: "70%", height: "500px" }} />
                                </div>
                                <div className="col-md-12">
                                    <div className="row mt-2">
                                        {singelauctiondetail?.image?.map((item, index) => (
                                            <div key={index} className="col-md-3 p-0 d-flex justify-content-center">
                                                <img
                                                    src={item}
                                                    className="img-fluid img-thumbnail"
                                                    alt=""
                                                    style={{ height: '100px', width: '200px' }} // Adjust the size as needed
                                                    onClick={() => setImage(item)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <div className="text p-0 m-1">
                            <h1 className='pt-1 pb-2'>{singelauctiondetail?.name}</h1>
                            <p className='pb-2'>{singelauctiondetail.description}</p>
                        </div>
                        <div className="bid price">
                            <p className="m-0">Current Bid at:</p>
                            <h2>{singelauctiondetail.bidprice}pkr</h2>
                        </div>
                        <div className="auctionTime mt-4 mb-3">
                            <a href="" style={{ fontSize: '25px' }}>Auction will end on</a>
                            <p>Ending on 12 Aug 2013 AM {singelauctiondetail?.timeDifference}</p>
                        </div>
                        <div className="enterbid w-100">
                            <h5 style={{ textDecoration: 'underline' }}>Your bid:</h5>
                            <form className="form d-flex gap-3">
                                <Button variant="contained" onClick={decrementBid}>-</Button>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter your bid"
                                    value={bid}
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => setBid(e.target.value)}
                                    type="number" // Ensure only numbers can be entered

                                />
                                <Button variant="contained" onClick={incrementBid}>+</Button>
                                <Button variant="contained" sx={{ mx: 'auto', width: 400 }}>Place A Bid</Button>

                            </form>
                        </div>

                        <div className="paymentmethods mt-4">
                            <div className="text p-0 m-0">
                                <h6>Guaranted Safe Checkout</h6>
                            </div>

                            <div className="paymenticone">
                                <span><FaCcVisa /></span>
                                <span><FaCcPaypal /></span>
                                <span><FaCcVisa /></span>
                                <span><FaCcPaypal /></span>
                                <span><FaCcVisa /></span>
                                <span><FaCcPaypal /></span>

                            </div>

                        </div>
                        <div className="question d-flex gap-4">
                            <h6><CiCircleQuestion /> Ask a question</h6>
                            <h6><CiHeart /> Add to wishlist</h6>
                        </div>
                        <div className="auction-details-description-area">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Description" value="1" />
                                            <Tab label="Additional Information" value="2" />
                                            <Tab label="Reviews (3)" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        {singelauctiondetail?.description}
                                    </TabPanel>
                                    <TabPanel value="2">
                                        Additional Information
                                        <ul className="list-group">
                                            <li className="list-group-item">{singelauctiondetail?.color} in color</li>
                                            <li className="list-group-item">{singelauctiondetail?.rarity} </li>
                                            <li className="list-group-item">{singelauctiondetail?.carat} </li>
                                            <li className="list-group-item">{singelauctiondetail?.origin} </li>

                                        </ul>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <TextField id="outlined-basic" label="NAME" variant="outlined" margin="normal" sx={{ width: '75%' }} />
                                        <TextField id="outlined-basic" label="EMAIL" variant="outlined" margin="normal" sx={{ width: '75%' }} className="mb-3" />
                                        <TextField
                                            label="Enter your review"
                                            variant="outlined"
                                            margin="normal"
                                            id="outlined-multiline-flexible"
                                            sx={{ width: '75%' }}
                                            className="mb-3"
                                            multiline
                                            rows={4}
                                            maxRows={8}
                                        />
                                        <Button variant="contained" sx={{ mx: 'auto', width: 200 }}>Submit</Button>

                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </div>
                    <div className="relatedauction">
                        <h2>Related Auctions</h2>
                        <div className="container">
                            <div className="row">
                                {
                                    relatedcategory.map((data, index) => {
                                        return <Auctioncard key={index} product={data} colSize={'col-lg-3 col-md-4 col-sm-6 col-12'} />

                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Auctiondetailpage;
