import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Detailpage.css';

export default function Detailpage() {
    
  return (
    <>
    <div className="detail-container">
        <div className="game-detail">
          <div className="img">
            <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="gtav" />
            <span className='metacitric-score'>92</span>
          </div>
          <div className="title">
            <h1>Grand Theft Auto V</h1>
            <small>Sep 17, 2013</small>
              <p className='my-3'>Genre : <span>Action</span>,<span>Adventure</span></p>
              <p>Platform : PlayStation 5 , Xbox Series S/X , PlayStation 4 , PC , PlayStation 3 , Xbox 360 , Xbox One</p>
              <p>Developers : Rockstar North , Rockstar Games</p>
              <p>Publisher : Rockstar Games</p>
              <p>Available On : PlayStation Store , Epic Games , Steam , Xbox 360 Store , Xbox Store</p>
             
          </div>
        </div>
        
        <div className="screenshots my-3">
          <h3>Screenshots</h3>
            <Swiper 
            slidesPerView={2}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" alt="gt v screen shots" />
              </SwiperSlide>
          </Swiper>
        </div>

        <div className="about-game my-3">
          <h3>About</h3>
          <p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>
        </div>

        <div className="requirements">
          <h3>Pc Requirements</h3>
          <p>Minimum : Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.</p>
          <p>Recommended : Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:</p>
        </div>
    </div>
    </>
  )
}

