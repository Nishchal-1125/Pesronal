import React from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Second from "../../img/secondimage.jpeg"
// import Sidebar from "../../img/sidebar.png"
import fourth from "../../img/fourth.jpeg"
import fifth from "../../img/fifth.jpeg"
import First from "../../img/fisrtupdate.jpeg"
// import HOC from "../../img/hoc.png"
// import MusicApp from "../../img/musicapp.png"
import 'swiper/css'



const Portfolio = () =>{
    return (
        <div className= "portfolio">

            <span>Recent projects</span>
            <span>portfolio</span>

            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'>
                <SwiperSlide>
                    <img src={Second} alt =" "/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourth} alt =" "/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} alt =" "/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={First} alt =" "/>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio