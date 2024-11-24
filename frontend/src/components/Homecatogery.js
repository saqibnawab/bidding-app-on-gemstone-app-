import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import axios from 'axios';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { breakpoints } from '@mui/system';

const Homecatogery = () => {
  const [subcategories, setsubCategories] = useState([]);
  console.log(subcategories);
  const backgroundColors = [
    { color: '#F0F8FF', name: 'Alice Blue' },
    { color: '#FFFAF0', name: 'Floral White' },
    { color: '#F5F5F5', name: 'White Smoke' },
    { color: '#FAFAD2', name: 'Light Goldenrod Yellow' },
    { color: '#E6E6FA', name: 'Lavender' },
    { color: '#FFFACD', name: 'Lemon Chiffon' },
    { color: '#F0FFF0', name: 'Honeydew' },
    { color: '#F5F0FF', name: 'Lavender Blush' },
    { color: '#E0FFFF', name: 'Light Cyan' },
    { color: '#F0F8FF', name: 'Alice Blue' }
  ];
  
  useEffect(()=>{
    axios.get('http://localhost:5000/subcategories')
    .then(res => {
      setsubCategories(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <>
      <div className="container-fluid pt-4">
        <div className="row arrow mb-4">
          <div className="catagoreytext d-flex justify-content-between align-items-center">
            <h3 className="ml-5">All Categories</h3>
            <div className="controller">
              <div className="pre"></div>
              <div className="next"></div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={9}
            navigation={{
              prevEl: '.pre',
              nextEl: '.next',
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 8,
                spaceBetween: 10,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 10,
                spaceBetween: 10,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 10,
                spaceBetween: 10,
              },
              // when window width is >= 1400px
              1400: {
                slidesPerView: 10,
                spaceBetween: 10,
              },
              
            }}
          
          >

            {
              subcategories.map((subcategory, index) => (
                <SwiperSlide key={index}>
                  <div className="catogeryitem" style={{ backgroundColor: backgroundColors[index % backgroundColors.length].color }}>
                    <img src={subcategory.image} alt="Category" />
                    <h3>{subcategory.name}</h3>
                    <p>{subcategory.items}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Homecatogery;
