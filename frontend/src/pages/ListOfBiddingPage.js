
      

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ListOfBiddingPage = () => {
    const [liveresult, setLiveresult] = useState([]);
    const [popularresult, setPopularresult] = useState([]);
    const [upcomingresult, setUpcomingresult] = useState([]);
    const [trendresult, setTrendresult] = useState([]);
    console.log("liveresult",);

    useEffect(() => {
        axios.get("http://localhost:5000/liveresult").then((res) => {
            setLiveresult(res.data.bids);
        }).catch((err) => console.log(err));

        axios.get("http://localhost:5000/popularresult").then((res) => {
            setPopularresult(res.data.bids);
        }).catch((err) => console.log(err));

        axios.get("http://localhost:5000/upcomingresult").then((res) => {
            setUpcomingresult(res.data.bids);
        }).catch((err) => console.log(err));

        axios.get("http://localhost:5000/trendingresult").then((res) => {
            setTrendresult(res.data.bids);
        }).catch((err) => console.log(err));
    }, []);

    const sentEmail = (email, subject, message) => {
        console.log("email", email);
        console.log("subject", subject);
        console.log("Message:", message);
        axios.post("http://localhost:5000/send-email", { email, subject, message })
            .then(() => toast.success('Email sent successfully!'))
            .catch(() => toast.error('Failed to send email.'));

    };

    // Sorting function to sort by bid price
    const sortResultsByBidPrice = (results) => {
        return [...results].sort((a, b) => b.bidprice - a.bidprice);
    };

    return (
        <div className="container">
            <div className="row">
                {/* Live Bids Table */}
                <div className="col-md-12">
                    <h2 className="text-center">Live Bids Result</h2>
                    <p className="text-center">You have total: {liveresult.length} products</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                 <th>image</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Bid Price</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortResultsByBidPrice(liveresult).map((item, index) => (
                                <tr key={item.id} className=''> 
                                    <td>{index + 1}</td>
                                    <td> <img src={item.image[0]} alt="" style={{ width:"80px" , height:"80px"}} /> </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.bidprice}</td>
                                  
                                    <td>
                                        {index === 0 && "1st"}
                                        {index === 1 && "2nd"}
                                        {index === 2 && "3rd"}
                                        {index > 2 && `${index + 1}th`}
                                    </td>
                                    {index === 0 && (
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => sentEmail(item.email, `Live Auction: ${item.name}`, `Dear ${item.username}, the live auction for ${item.name} is ongoing with a bid of ${item.bidprice}.`)}
                                            >
                                                Send Mail
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Trending Auctions Table */}
                <div className="col-md-12">
                    <h2 className="text-center">Trending Auctions of the Week</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                  <th>image</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Bid Price</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortResultsByBidPrice(trendresult).map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                     <td> <img src={item.image[0]} alt="" style={{ width:"80px" , height:"80px"}} /> </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.bidprice}</td>
                                    <td>
                                        {index === 0 && "1st"}
                                        {index === 1 && "2nd"}
                                        {index === 2 && "3rd"}
                                        {index > 2 && `${index + 1}th`}
                                    </td>
                                    {index === 0 && (
                                        <td>
                                            <button
                                                className="btn btn-sucess"
                                                onClick={() => sentEmail(item.email, `Trending Auction: ${item.name}`, `Dear ${item.username}, the trending auction for ${item.name} is ongoing with a bid of ${item.bidprice}.`)}
                                            >
                                                Send Mail
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Popular Auctions Table */}
                <div className="col-md-12">
                    <h2 className="text-center">Popular Auctions of the Week</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                  <th>image</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Bid Price</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortResultsByBidPrice(popularresult).map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                     <td> <img src={item.image[0]} alt="" style={{ width:"80px" , height:"80px"}} /> </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.bidprice}</td>
                                    <td>
                                        {index === 0 && "1st"}
                                        {index === 1 && "2nd"}
                                        {index === 2 && "3rd"}
                                        {index > 2 && `${index + 1}th`}
                                    </td>
                                    {index === 0 && (
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => sentEmail(item.email, `Popular Auction: ${item.name}`, `Dear ${item.username}, the popular auction for ${item.name} is ongoing with a bid of ${item.bidprice}.`)}
                                            >
                                                Send Mail
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Upcoming Auctions Table */}
                <div className="col-md-12">
                    <h2 className="text-center">Upcoming Auctions of the Week</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>image</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Bid Price</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortResultsByBidPrice(upcomingresult).map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                     <td> <img src={item.image[0]} alt="" style={{ width:"80px" , height:"80px"}} /> </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.bidprice}</td>
                                    <td>
                                        {index === 0 && "1st"}
                                        {index === 1 && "2nd"}
                                        {index === 2 && "3rd"}
                                        {index > 2 && `${index + 1}th`}
                                    </td>
                                    {index === 0 && (
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => sentEmail(item.email, `Upcoming Auction: ${item.name}`, `Dear ${item.username}, the upcoming auction for ${item.name} has a bid of ${item.bidprice}.`)}
                                            >
                                                Send Mail
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListOfBiddingPage;



