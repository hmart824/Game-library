import React from 'react';
import './Screenshots.css';
import ReactPlayer from 'react-player';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function Screenshots(props) {
  return (
    <>
        <h3>Screenshots</h3>
            <Swiper 
            slidesPerView={2}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper"
            >
                {props.trailers && props.trailers.map((el)=>{
                    return  <SwiperSlide key={el.id}>
                                <ReactPlayer
                                    className='react-player'
                                    url={el.data['480']}
                                    playing={true}
                                    loop={true}
                                    light={el.preview}
                                    controls={true}
                                    width='100%'
                                    height='100%'
                                    />
                            </SwiperSlide>
                })}
                {props.screenshots.map((el)=>{
                    return <SwiperSlide key={el.id}>
                                {/* <img src={} alt="gt v screen shots" /> */}
                                <LazyLoadImage
                                src={el.image}
                                effect='blur'
                                placeholderSrc={el.image}
                                />
                            </SwiperSlide>
                })}
            </Swiper>
    </>
  )
}

export default Screenshots