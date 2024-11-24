import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Auctioncard from './Auctioncard';
import axios from 'axios';
const Upcomingauction = () => {
    const [upcommingproduct, setupcommingproduct] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/findbystatus/upcoming').then((response) => {
            console.log("upcomming product", response.data);
            setupcommingproduct(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <>
            <div className="container-fluid">
                <h3 className='text-center'>Upcomimg auction </h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="trendingimage">
                            <div className="trendingitemtext text-white d-flex flex-column  align-items-center justify-content-center h-100">
                                <h3>Trending Auction</h3>
                                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quae.</p>
                                <button className='btn btn-danger '>Bid now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            breakpoints={{
                                // For mobile devices
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                // For tablets
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                // For desktops
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                // Large screens
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                        >


                            {
                                upcommingproduct.map((product, index) => {
                                    return (
                                        <>
                                            <SwiperSlide key={index}>
                                                <Auctioncard product={product} />
                                            </SwiperSlide>

                                        </>
                                    )
                                })
                            }




                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcomingauction
