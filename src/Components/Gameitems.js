import React from 'react'
import './Gameitems.css';
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillWindows } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import { HiDeviceMobile } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";

export default function Gameitems(props) {
  
  const getPlatformsIcon = (slug)=>{
    let platforms = {
      pc : <AiFillWindows title='pc'/>,
      linux : <DiLinux title='linux'/>,
      playstation : <FaPlaystation title='playstation'/>,
      xbox : <FaXbox title='xbox'/>,
      ios : <HiDeviceMobile title='ios'/>,
      mac : <AiFillApple title='apple'/>,
      android : <AiFillAndroid title='android'/>,
      nintendo : <SiNintendoswitch title='nintendo'/>,
      web : <TbWorld title='web'/>
    }

    return platforms[slug]
  }
  
  

  const myStyle = (metaScore)=>{
    if(metaScore <= 100 && metaScore >= 90){
        let style = {
          "borderColor":"green",
          "color":"green"
        }
      return style;
    }
    else if(metaScore >= 80 && metaScore < 90){
      let style = {
        "borderColor":"blue",
        "color":"blue"
      }
      return style;
    }
    else if(metaScore >= 70 && metaScore < 80){
      let style = {
        "borderColor":"yellow",
        "color":"yellow"
      }
      return style;
    }
    else{
      let style = {
        "borderColor":"red",
        "color":"red"
      }
      return style;
    }
  }

  const navigate = useNavigate();
  const goToDetail = ()=>{
    console.log('clicked');
    navigate('/detail')
  }
    return (
      <div>
        <div className="card-item" onClick={()=>{goToDetail()}}>
          <div className="card-img">
            <LazyLoadImage
              src={props.bgImg} 
              height={200}
              width={321} 
              effect='blur'
              placeholderSrc={props.bgImg}
              />
          </div>
            
          <div className="card-text">
            <div className="platform">
            {props.parentPlatform?.map((el)=>{
              return <span key={el.platform.id}>{getPlatformsIcon(el.platform.slug)}</span>
            })}
            </div>
            {props.metacritic && <div className="metacitric-score" title='Meta score' style={myStyle(props.metacritic)}>
              <span>{props.metacritic}</span>
            </div>}
            <h2>{props.name}</h2>
            <div className="ratings">
              <span>Ratings : </span><span>{props.rating?.toString().slice(0,3)}</span> / <span>{props.ratingTop}</span>
            </div>
            <h4>Released On : {props.releasedDate?.split('-').reverse().join('-')}</h4>
          </div>
         </div>
      </div>
    )
  }

