// import React, { useEffect, useState } from 'react'
// import Auctioncard from './Auctioncard'

// import axios from 'axios';

// const Popularauction = () => {
//     const [catagorey, setcatagorey] = React.useState([]);
//     const [popularproduct, setpopularproduct] = useState([]);


//     ///pagination
//     const [currentpage, setcurrentpage] = useState(1)
//     const [bidperpage, setbidperpage] = useState(6)
//     const indexoflastbid = currentpage * bidperpage
//     const indexoffirstbid = indexoflastbid - bidperpage
//     const currentbids = popularproduct.slice(indexoffirstbid, indexoflastbid)
//     console.log("cuurentbid", currentbids)
//     const filterbycatagorey = (catagorey) => {
//         axios.get(`http://localhost:5000/findbycategory/${catagorey}`).then((response) => {
//             setcatagorey(response.data)
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     useEffect(() => {
//         axios.get('http://localhost:5000/findbystatus/popular').then((response) => {
//             console.log("popular product ", response.data);
//             setpopularproduct(response.data)

//         }).catch((error) => {
//             console.log(error);
//         })
//     }, [])
//     return (
//         <>
//             <div className="container pt-4">
//                 <div className="allauction d-flex justify-content-between align-items-center">
//                     <div className="text"><h3>ALL Popular Auction</h3></div>
//                     <div className="navbar">
//                         <nav class="navbar navbar-expand-lg  p-0">
//                             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="navbar-toggler-icon"></span>
//                             </button>
//                             <div class="collapse navbar-collapse" id="navbarNav">
//                                 <ul class="navbar-nav">
//                                     <li class="nav-item mx-0">
//                                         <a class="nav-link " >Showall</a>
//                                     </li>
//                                     <li class="nav-item mx-0">
//                                         <a class="nav-link " onClick={() => filterbycatagorey("PreciousGemstones")}>PreciousGemstones</a>
//                                     </li>

//                                     <li class="nav-item mx-0">
//                                         <a class="nav-link " onClick={() => filterbycatagorey("PreciousGemstones")}>SemiPreciousGemstones</a>
//                                     </li>
//                                     <li class="nav-item mx-0">
//                                         <a class="nav-link " onClick={() => filterbycatagorey("OrganicGemstones")}>OrganicGemstones</a>
//                                     </li>
//                                     <li class="nav-item mx-0">
//                                         <a class="nav-link " onClick={() => filterbycatagorey("RareGemstones")}>RareGemstones</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>



//                     </div>
//                 </div>

//                 <hr className='p-0 m-0' />
//                 <div className="row">
//                     {
//                         popularproduct?.map((product, index) => {
//                             return (
//                                 <>
//                                     <Auctioncard product={product} index={index} colSize={'col-md-3'} />
//                                 </>
//                             )
//                         })
//                     }


//                 </div>

//             </div>
//         </>
//     )
// }

// export default Popularauction







import React, { useEffect, useState } from 'react';
import Auctioncard from './Auctioncard';
import axios from 'axios';

const Popularauction = () => {
    const [catagorey, setcatagorey] = useState([]);
    const [popularproduct, setpopularproduct] = useState([]);

    // Pagination state
    const [currentpage, setcurrentpage] = useState(1);
    const [bidperpage, setbidperpage] = useState(8);

    // Determine the indices for slicing the product array
    const indexoflastbid = currentpage * bidperpage;
    const indexoffirstbid = indexoflastbid - bidperpage;
    const currentbids = popularproduct.slice(indexoffirstbid, indexoflastbid);

    // Fetch data from backend
    useEffect(() => {
        axios.get('http://localhost:5000/findbystatus/popular')
            .then((response) => {
                console.log("popular product ", response.data);
                setpopularproduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle category filtering
    const filterbycatagorey = (category) => {
        axios.get(`http://localhost:5000/findbycategory/${category}`)
            .then((response) => {
                setpopularproduct(response.data);
                setcurrentpage(1); // Reset to the first page on filter change
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Handle pagination controls
    const handlePageChange = (pageNumber) => {
        setcurrentpage(pageNumber);
    };

    const totalPages = Math.ceil(popularproduct.length / bidperpage);

    return (
        <div className="container pt-4">
            <div className="allauction d-flex justify-content-between align-items-center">
                <div className="text">
                    <h3>ALL Popular Auction</h3>
                </div>
                <div className="navbar">
                    <nav className="navbar navbar-expand-lg p-0">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-0">
                                    <a className="nav-link" onClick={() => filterbycatagorey("")}>Show all</a>
                                </li>
                                <li className="nav-item mx-0">
                                    <a className="nav-link" onClick={() => filterbycatagorey("PreciousGemstones")}>PreciousGemstones</a>
                                </li>
                                <li className="nav-item mx-0">
                                    <a className="nav-link" onClick={() => filterbycatagorey("SemiPreciousGemstones")}>SemiPreciousGemstones</a>
                                </li>
                                <li className="nav-item mx-0">
                                    <a className="nav-link" onClick={() => filterbycatagorey("OrganicGemstones")}>OrganicGemstones</a>
                                </li>
                                <li className="nav-item mx-0">
                                    <a className="nav-link" onClick={() => filterbycatagorey("RareGemstones")}>RareGemstones</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <hr className='p-0 m-0' />
            <div className="row">
                {currentbids.map((product) => (
                    <Auctioncard key={product._id} product={product} colSize={'col-md-3 col-12'} />
                ))}
            </div>

            {/* Centered Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentpage - 1)}
                                disabled={currentpage === 1}
                            >
                                Previous
                            </button>
                        </li>
                        {[...Array(totalPages).keys()].map(number => (
                            <li key={number} className={`page-item ${currentpage === number + 1 ? 'active' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(number + 1)}
                                >
                                    {number + 1}
                                </button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentpage + 1)}
                                disabled={currentpage === totalPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Popularauction;
