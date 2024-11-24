import React from 'react'
import logo from "../Images/logo.png"
import { SlSocialFacebook } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Auctionfooter = () => {
    return (
        <>
            <div className="container-fluid auctionfooter ">
                <div className="row m-0 p-0">
                    <div className="col-md-3 col-6 pt-5 d-flex flex-column align-items-center">
                        <h4 className=''>catagorey</h4>
                        <ul className='ul text-center'>
                            <li>Computers</li>
                            <li>Photography</li>
                            <li>Photography</li>
                            <li>Photography</li>
                            <li>Photography</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-6 pt-5 d-flex flex-column align-items-center">
                        <h4 className=''>companey</h4>
                        <ul className='ul text-center'>
                            <li>how tio bid us</li>
                            <li>how to sell us </li>
                            <li>about us</li>
                            <li>FAQ</li>
                            <li>Photography</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12 pt-5 ">
                        <div className="image ">
                            <img src={logo} alt="" style={{ width: "100px", height: "100px" }} className='mx-auto d-block' />
                        </div>
                        <div className="footertext d-flex flex-column justify-content-center align-items-center">
                            <h4>Social Just You Connected Us!</h4>
                            <span>All of update in social</span>
                        </div>
                        <div className="footericone">
                            <div className="facbook d-flex flex-column justify-content-center align-items-center">
                                <span><SlSocialFacebook /></span>
                                <span>facebook</span>
                            </div>
                            <div className="instagram d-flex flex-column justify-content-center align-items-center">
                                <span><LuInstagram /></span>
                                <span>instagram</span>
                            </div>
                            <div className="twitter d-flex flex-column justify-content-center align-items-center">
                                <span><IoLogoTwitter /> </span>
                                <span>twitter</span>
                            </div>
                            <div className="Linkedin d-flex flex-column justify-content-center align-items-center">
                                <span><FaLinkedin /></span>
                                <span>Linkedin</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-12 pt-5">
                        <form className='text-center'>
                            <h2 className='pt-5 m-5'>Join Our Newsletter &  <br />More information.</h2>
                            <div className="input d-flex  justify-content-center align-items-center">
                                <input type="email" placeholder='Enter Your Email' style={{ border: "none", outline: "none", borderBottom: "1px solid black", height: "40px" }} />
                                <button className='btn btn-primary'>Subscribe</button>
                            </div>

                        </form>
                    </div>
                </div>
                <hr />
                <div className="text-center d-flex justify-content-between align-items-center text-white fw-bold">
                    <div className="lasttextone">
                        ©Copyright 2024 Probid | Design By Egens Lab
                    </div>
                    <div className="lasttexttwo">
                        Support Center
                        Terms & Conditions
                        Privacy Policy
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auctionfooter
