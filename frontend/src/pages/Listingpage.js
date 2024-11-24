// import React, { useEffect, useState } from 'react'
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Auctioncard from '../components/Auctioncard';
// import { PiDotsNineBold } from "react-icons/pi";
// import { PiDotsSixVerticalBold } from "react-icons/pi";
// import Pagination from '@mui/material/Pagination';
// import axios from 'axios';

// const Listingpage = () => {

//     const [fsubcategory, setfsubcategory] = useState([])
//     const [fprice, setfprice] = useState([])
//     const [fauctionstatus, setfauctionstatus] = useState([])
//     const [filterdata, setfilterdata] = useState([])




//     const filteralldata = () => {
//         console.log("filtering", { fsubcategory, fauctionstatus, fprice })
//         axios.get('http://localhost:5000/filtergemstones', {
//             params: {
//                 subcategory: fsubcategory.join(','),
//                 status: fauctionstatus.join(','),
//                 bidprice: fprice[0] || '',
//             },
//         }).then((res) => {
//             console.log(res)
//             setfilterdata(res.data)
//         }).catch((err) => {
//             console.log(err)
//         })

//     }

//     const handleCatagoryChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             // Add selected value to the filter
//             setfsubcategory((prev) => [...prev, value]);
//         } else {
//             // Remove unselected value from the filter
//             setfsubcategory((prev) => prev.filter((item) => item !== value));
//         }
//     }


//     const handleAuctionStatusChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             // Add selected value to the filter
//             setfauctionstatus((prev) => [...prev, value]);
//         } else {
//             // Remove unselected value from the filter
//             setfauctionstatus((prev) => prev.filter((item) => item !== value));
//         }
//     }
//     const handleAuctionPriceChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             // Add selected value to the filter
//             setfprice((prev) => [...prev, value]);
//         } else {
//             // Remove unselected value from the filter
//             setfprice((prev) => prev.filter((item) => item !== value));
//         }
//     }
//     useEffect(() => {
//         filteralldata();
//     }, [fsubcategory, fauctionstatus, fprice])

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-2">

//                     <div className="row catagory">
//                         <div className="listingcheakbox d-flex flex-column justify-content-start ">
//                             <h4>Catagorey</h4>
//                             <FormControlLabel
//                                 control={<Checkbox value="Diamond" onChange={handleCatagoryChange} />}
//                                 label="Diamond"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Ruby" onChange={handleCatagoryChange} />}
//                                 label="Ruby"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Emerald" onChange={handleCatagoryChange} />}
//                                 label="Emerald"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Opal" onChange={handleCatagoryChange} />}
//                                 label="Opal"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Pearl" onChange={handleCatagoryChange} />}
//                                 label="Pearl"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Topaz" onChange={handleCatagoryChange} />}
//                                 label="Topaz"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Amethyst" onChange={handleCatagoryChange} />}
//                                 label="Amethyst"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Citrine" onChange={handleCatagoryChange} />}
//                                 label="Citrine"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Amber" onChange={handleCatagoryChange} />}
//                                 label="Amber"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Coral" onChange={handleCatagoryChange} />}
//                                 label="Coral"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Spinel" onChange={handleCatagoryChange} />}
//                                 label="Spinel"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Zircon" onChange={handleCatagoryChange} />}
//                                 label="Zircon"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="Moonstone" onChange={handleCatagoryChange} />}
//                                 label="Moonstone"
//                             />
//                         </div>

//                     </div>
//                     <div className="row price d-flex flex-column justify-content-start mt-4">
//                         <h4>Price</h4>
//                         <FormControlLabel control={<Checkbox />} value="Lowtohigh" onChange={handleAuctionPriceChange} label="Lowtohigh" />
//                         <FormControlLabel control={<Checkbox />} value="HightoLow" onChange={handleAuctionPriceChange} label="HightoLow" />
//                     </div>

//                     <div className="upcoming d-flex flex-column justify-content-start mt-4">
//                         <h4>Type of action</h4>
//                         <FormControlLabel control={<Checkbox value="upcoming" />} onChange={handleAuctionStatusChange} label="Upcoming" />
//                         <FormControlLabel control={<Checkbox value="live" />} onChange={handleAuctionStatusChange} label="live" />
//                         <FormControlLabel control={<Checkbox value="popular" />} onChange={handleAuctionStatusChange} label="popular" />
//                         <FormControlLabel control={<Checkbox value="trending" />} onChange={handleAuctionStatusChange} label="trending" />

//                     </div>

//                     <div className="highestbuttion mt-4">
//                         <h5>highestAuction</h5>
//                         <Auctioncard />
//                         <Auctioncard />
//                     </div>
//                 </div>
//                 <div className="col-md-10">
//                     <div className="listingrighttext d-flex justify-content-between">
//                         <div className='opacity-50'> <h6>Showing 1-10 Results</h6> </div>
//                         <div className="listingrighticone">
//                             {/* <div className="select">
//                                 <select class="form-select form-select-sm" aria-label=".form-select-sm example">
//                                     <option selected>sort by price</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div> */}
//                             <div className="icone">
//                                 <PiDotsNineBold />
//                                 <PiDotsSixVerticalBold />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                       {
//                         filterdata.map((product, index) => {
//                           return (
//                             <>
//                               <Auctioncard key={index} product={product} colSize={"col-md-4"} />
//                             </>
//                           )
//                         })
//                       }




//                     </div>
//                     <div className=" d-flex justify-content-center mt-4">
//                         <Pagination count={10} color="secondary" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Listingpage






// ------------------------------------------------------------------------------------------------------------------------------------






import React, { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Auctioncard from '../components/Auctioncard';
import { PiDotsNineBold, PiDotsSixVerticalBold } from 'react-icons/pi';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

const Listingpage = () => {
    const [fsubcategory, setfsubcategory] = useState([]);
    const [fprice, setfprice] = useState([]);
    const [fauctionstatus, setfauctionstatus] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(filterdata.length / itemsPerPage);

    const filteralldata = () => {
        console.log("filtering", { fsubcategory, fauctionstatus, fprice });
        axios.get('http://localhost:5000/filtergemstones', {
            params: {
                subcategory: fsubcategory.join(','),
                status: fauctionstatus.join(','),
                bidprice: fprice[0] || '',
            },
        })
            .then((res) => {
                console.log(res);
                setfilterdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCatagoryChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setfsubcategory((prev) => [...prev, value]);
        } else {
            setfsubcategory((prev) => prev.filter((item) => item !== value));
        }
    };

    const handleAuctionStatusChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setfauctionstatus((prev) => [...prev, value]);
        } else {
            setfauctionstatus((prev) => prev.filter((item) => item !== value));
        }
    };

    const handleAuctionPriceChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setfprice((prev) => [...prev, value]);
        } else {
            setfprice((prev) => prev.filter((item) => item !== value));
        }
    };

    useEffect(() => {
        filteralldata();
    }, [fsubcategory, fauctionstatus, fprice]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="row catagory">
                        <div className="listingcheakbox d-flex flex-column justify-content-start">
                            <h4>Category</h4>
                            <FormControlLabel
                                control={<Checkbox value="Diamond" onChange={handleCatagoryChange} />}
                                label="Diamond"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Ruby" onChange={handleCatagoryChange} />}
                                label="Ruby"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Emerald" onChange={handleCatagoryChange} />}
                                label="Emerald"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Opal" onChange={handleCatagoryChange} />}
                                label="Opal"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Pearl" onChange={handleCatagoryChange} />}
                                label="Pearl"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Topaz" onChange={handleCatagoryChange} />}
                                label="Topaz"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Amethyst" onChange={handleCatagoryChange} />}
                                label="Amethyst"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Citrine" onChange={handleCatagoryChange} />}
                                label="Citrine"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Amber" onChange={handleCatagoryChange} />}
                                label="Amber"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Coral" onChange={handleCatagoryChange} />}
                                label="Coral"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Spinel" onChange={handleCatagoryChange} />}
                                label="Spinel"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Zircon" onChange={handleCatagoryChange} />}
                                label="Zircon"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Moonstone" onChange={handleCatagoryChange} />}
                                label="Moonstone"
                            />
                        </div>
                    </div>
                    <div className="row price d-flex flex-column justify-content-start mt-4">
                        <h4>Price</h4>
                        <FormControlLabel
                            control={<Checkbox />}
                            value="Lowtohigh"
                            onChange={handleAuctionPriceChange}
                            label="Low to High"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            value="HightoLow"
                            onChange={handleAuctionPriceChange}
                            label="High to Low"
                        />
                    </div>

                    <div className="upcoming d-flex flex-column justify-content-start mt-4">
                        <h4>Type of Auction</h4>
                        <FormControlLabel
                            control={<Checkbox value="upcoming" />}
                            onChange={handleAuctionStatusChange}
                            label="Upcoming"
                        />
                        <FormControlLabel
                            control={<Checkbox value="live" />}
                            onChange={handleAuctionStatusChange}
                            label="Live"
                        />
                        <FormControlLabel
                            control={<Checkbox value="popular" />}
                            onChange={handleAuctionStatusChange}
                            label="Popular"
                        />
                        <FormControlLabel
                            control={<Checkbox value="trending" />}
                            onChange={handleAuctionStatusChange}
                            label="Trending"
                        />
                    </div>

                    <div className="highestbuttion mt-4">
                        <h5>Highest Auction</h5>
                        <Auctioncard />
                        <Auctioncard />
                    </div>
                </div>
                <div className="col-8">
                    <div className="listingrighttext d-flex justify-content-between">
                        <div className='opacity-50'>
                            <h6>Showing {indexOfFirstItem + 1}-{indexOfLastItem > filterdata.length ? filterdata.length : indexOfLastItem} Results</h6>
                        </div>
                        <div className="listingrighticone">
                            <div className="icone">
                                <PiDotsNineBold />
                                <PiDotsSixVerticalBold />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {currentItems.map((product, index) => (
                            <Auctioncard key={index} product={product} colSize={"col-md-4 col-12 "} />
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listingpage;






