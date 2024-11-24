// import React, { useEffect, useState } from 'react';
// import { MdOutlineEmail } from "react-icons/md";
// import { HiMiniLanguage } from "react-icons/hi2";
// import { FaRegUser } from "react-icons/fa6";
// import { RiCustomerService2Line } from "react-icons/ri";
// import Button from '@mui/material/Button';
// import logo from "../Images/logo.png";
// import { NavLink } from 'react-router-dom';
// import { CiHeart } from "react-icons/ci";

// const Navbar = () => {

//     const [email, setEmail] = useState(''); // State for email

//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (userData && userData.email) {
//             setEmail(userData.email); // Set the email in state
//         } else {
//             setEmail("bot"); // Fallback if no email found
//         }
//     }, []);
//     return (
//         <>
//             <div className="container-fluid">
//                 {/* Row 1 */}
//                 <div className="row">
//                     <div className="col-md-6 d-flex justify-content-start">
//                         <NavLink to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
//                             <div className="headeremail d-flex align-items-center">
//                                 <MdOutlineEmail className="me-2" />
//                                 <span>info@example.com</span>
//                             </div>
//                         </NavLink>

//                         <div className="vr mx-3"></div>
//                         <div className="headersupport d-flex align-items-center">
//                             <RiCustomerService2Line className="me-2" />
//                             <NavLink to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <span>Customer support</span>
//                             </NavLink>
//                         </div>

//                         <div className="vr mx-3"></div>
//                         <div className="headersupport d-flex align-items-center">
//                             <CiHeart className='me-2' />
//                             <NavLink to='/wishlist' style={{ textDecoration: 'none', color: 'inherit' }}>
//                                 <span>wishlist</span>
//                             </NavLink>
//                         </div>
//                     </div>

//                     <div className="col-md-6 d-flex justify-content-end">
//                         <div className="headerbutton d-flex align-items-center">
//                             <NavLink to='/howtobid'>
//                                 <Button variant="outlined" className='py-0 text-dark mx-1 rounded'>HOW TO BID</Button>
//                             </NavLink>
//                             <NavLink to='/howtosell'>
//                                 <Button variant="outlined" className='py-0 text-dark mx-1 rounded'>SELL YOUR ITEM</Button>
//                             </NavLink>
//                             <span className='ms-4'>
//                                 <HiMiniLanguage /> Language
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Row 2 */}
//                 <div className="row">
//                     <div className="navbarwrapper d-flex justify-content-between align-items-center">
//                         <div className="logo">
//                             <img src={logo} alt="logo" style={{ width: "100px", height: "80px" }} />
//                         </div>
//                         <div className="navbar">
//                             <nav className="navbar navbar-expand-lg navbar-light">
//                                 <div className="container-fluid">
//                                     <button
//                                         className="navbar-toggler"
//                                         type="button"
//                                         data-bs-toggle="collapse"
//                                         data-bs-target="#navbarNav"
//                                         aria-controls="navbarNav"
//                                         aria-expanded="false"
//                                         aria-label="Toggle navigation"
//                                     >
//                                         <span className="navbar-toggler-icon"></span>
//                                     </button>
//                                     <div className="collapse navbar-collapse" id="navbarNav">
//                                         <ul className="navbar-nav">
//                                             <li className="nav-item">
//                                                 <NavLink to='/home' style={{ textDecoration: "none" }}>
//                                                     <span className="nav-link">Home</span>
//                                                 </NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to='/listingpage' style={{ textDecoration: "none" }}>
//                                                     <span className="nav-link">Bidnow</span>
//                                                 </NavLink>
//                                             </li>
//                                             <li className="nav-item mx-4">
//                                                 <NavLink to="/blog" style={{ textDecoration: "none" }}>
//                                                     <span className="nav-link">Blogs</span>
//                                                 </NavLink>
//                                             </li>
//                                             <li className="nav-item mx-4">
//                                                 <NavLink to='/contact' style={{ textDecoration: "none" }}>
//                                                     <span className="nav-link">Contact</span>
//                                                 </NavLink>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                         <div className="button">
//                             {/* <button className="btn d-flex align-items-center p-2">
//                                 <FaRegUser />
//                                 <span >Myaccount</span>
//                             </button> */}
//                             <div className="dropdown">
//                                 <button
//                                     className="btn btn-secondary dropdown-toggle d-flex align-items-center p-2"
//                                     type="button"
//                                     id="dropdownMenuButton"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     <FaRegUser />
//                                     <span className="ms-2">Myaccount</span>
//                                 </button>
//                                 <ul
//                                     className="dropdown-menu text-center"
//                                     aria-labelledby="dropdownMenuButton"
//                                     style={{ minWidth: "200px", backgroundColor: "#f8f9fa", borderRadius: "20px" }}
//                                 >
//                                     <li>
//                                         <h4 className='dropdown-header'>{ email || "saqibnawab"}</h4>
//                                     </li>
//                                     <li>
//                                         <img
//                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCP61xvrbUlqgEqLUQ8EG_KFd0Eq5MlwIpZw&s"
//                                             alt="profile"
//                                             style={{ width: "70px", height: "70px", borderRadius: "50%", margin: "auto", marginTop: "2px" }}
//                                         />
//                                     </li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li>
//                                         <NavLink to='/registration' className="dropdown-item">Registration</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/login' className="dropdown-item">Login</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/logout' className="dropdown-item">Logout</NavLink>
//                                     </li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li>
//                                         <NavLink to='/admin' className="dropdown-item">Admin</NavLink>
//                                     </li>
//                                 </ul>

//                             </div>



//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Navbar;

import React from 'react';
import logo from "../Images/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo Section */}
                <div className="header_logo">
                    <img src={logo} alt="Logo" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                </div>

                {/* Toggler Button for Small Screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav text-center d-flex gap-4">
                        <li className="nav-item">
                            <NavLink to='/home' style={{ textDecoration: "none" }}>
                                <span className="nav-link">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/listingpage' style={{ textDecoration: "none" }}>
                                <span className="nav-link">Bidnow</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" style={{ textDecoration: "none" }}>
                                <span className="nav-link">Blogs</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' style={{ textDecoration: "none" }}>
                                <span className="nav-link">Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;













