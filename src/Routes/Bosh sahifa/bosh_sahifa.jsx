import "./bosh_sahifa.css"
import rasm from "../../assets/images/rasm.jpg"
import rasm2 from "../../assets/images/rasm2.jpg"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const bosh_sahifa = () => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper"
            >
                <SwiperSlide><img src={rasm} alt="" /></SwiperSlide>
                <SwiperSlide><img src={rasm2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={rasm} alt="" /></SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span> */}
                </div>
            </Swiper>
        </div>
    )
}

export default bosh_sahifa