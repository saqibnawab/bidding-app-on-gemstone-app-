

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Herosection = () => {

    const [Rightimages, setRightImages] = useState([])
    const [Leftimages, setLeftImages] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/getAllHeroimage').then(res => {

            setRightImages(res.data[0].images.slice(0, 2));
            setLeftImages(res.data[0].images.slice(2, 6));

        })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="imagesslider">


                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000, // Delay between transitions in ms
                                    disableOnInteraction: false, // Continue autoplay after user interactions
                                }}

                            >
                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Rightimages[0]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>
                                        <div className="text-1Ofheroimage">
                                            <div className="textone">
                                                <h3>Discover the World of Rare Gemstones</h3>
                                                <p>Explore and bid on exclusive gemstones from around the world. Start your journey now and find the perfect gem for  your  collection  </p>
                                                <button>Start Bidding</button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Rightimages[1]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>

                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">

                        <div className="imagesslider position-relative border border-dark" >

                            <div className="custom-swiper-button-prev "><FaArrowRight /> </div>
                            <div className="custom-swiper-button-next"><FaArrowLeft /></div>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev'
                                }}

                            >
                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Leftimages[1]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>
                                        <div className="text-2Ofheroimage">
                                            <div className="text2">
                                                <h3>Discover the World of Rare Gemstones</h3>
                                                <p>Explore and bid on exclusive gemstones from around the world. Start your journey now and find the perfect gem for  your  collection  </p>
                                                <button>Start Bidding</button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Leftimages[0]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>
                                        <div className="text-2Ofheroimage">
                                            <div className="text2">
                                                <h3>Discover the World of Rare Gemstones</h3>
                                                <p>Explore and bid on exclusive gemstones from around the world. Start your journey now and find the perfect gem for  your  collection  </p>
                                                <button>Start Bidding</button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Leftimages[2]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>
                                        <div className="text-2Ofheroimage">
                                            <div className="text2">
                                                <h3>Discover the World of Rare Gemstones</h3>
                                                <p>Explore and bid on exclusive gemstones from around the world. Start your journey now and find the perfect gem for  your  collection  </p>
                                                <button>Start Bidding</button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="image" style={{
                                        backgroundImage: `url(${Leftimages[3]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                        borderRadius: '5px',
                                        marginBottom: '20px'
                                    }}>
                                        <div className="text-2Ofheroimage">
                                            <div className="text2">
                                                <h3>Discover the World of Rare Gemstones</h3>
                                                <p>Explore and bid on exclusive gemstones from around the world. Start your journey now and find the perfect gem for  your  collection  </p>
                                                <button>Start Bidding</button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection
