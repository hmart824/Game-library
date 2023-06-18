import React from 'react'
import './Gameitems.css';
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getPlatformsIcon , myStyle , getDate } from '../../Utils/Util_functions';


export default function Gameitems(props) {
  
  

  const navigate = useNavigate();
  const goToDetail = ()=>{
    let id = props.id;
    console.log('clicked');
    navigate(`/games/${id}`);
  }
    return (
      <>
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
            <h4>Released On : {getDate(props.releasedDate)}</h4>
          </div>
         </div>
      </>
    )
  }

