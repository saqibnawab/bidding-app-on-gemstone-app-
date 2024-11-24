import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Auctioncard from './Auctioncard';
import axios from 'axios';
const Trendingauction = () => {
    const [trendingproduct, settrendingproduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/findbystatus/trending').then((response) => {
            console.log("treding ", response.data);
            settrendingproduct(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className="conatiner">
                <h3 className='text-center'>Trending auction of weak</h3>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="trendingimage">
                            <div className="trendingitemtext text-white d-flex flex-column  align-items-center justify-content-center h-100">
                                <h3>Trending Auction</h3>
                                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quae.</p>
                                <button className='btn btn-danger '>Bid now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={4}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            breakpoints={{
                                // when window width is >= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                // when window width is >= 480px
                                480: {
                                  slidesPerView: 3,
                                  spaceBetween: 10,
                                },
                                // when window width is >= 768px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetween: 10,
                                },
                                // when window width is >= 1024px
                                1024: {
                                  slidesPerView: 4,
                                  spaceBetween: 10,
                                },
                                // when window width is >= 1200px
                                1200: {
                                  slidesPerView: 4,
                                  spaceBetween: 10,
                                },
                                // when window width is >= 1400px
                                1400: {
                                  slidesPerView: 4,
                                  spaceBetween: 10,
                                },
                                
                              }}
                        >

                            {
                                trendingproduct.map((product, index) => {
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

export default Trendingauction
