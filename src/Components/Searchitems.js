import React from 'react';
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Searchitems.css';

export default function Searchitems(props) {
  const navigate = useNavigate();
  const goToDetail = ()=>{
    let id = props.id;
    console.log('clicked');
    navigate(`/games/${id}`);
  }
    return (
      <>
        <div className='game-list my-1'onClick={()=>{goToDetail()}}>
            <div className="game-img">
                <LazyLoadImage
                  src={props.bgImg} 
                  height={72}
                  width={56} 
                  effect='blur'
                  placeholderSrc={props.bgImg}
                  />
            </div>
            <div className="game-title">
                <span className='mx-2'>{props.name}</span>
            </div>
        </div>
      </>
    )
  }

