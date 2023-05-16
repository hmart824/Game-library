import React from 'react';
import './Screenshots.css';
import ReactPlayer from 'react-player';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow} from "swiper";

function Screenshots(props) {
  return (
    <>
        <h3>Screenshots</h3>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
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