import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Searchitems.css';
import {searchVal} from '../Navbar/Navbar';

export default function Searchitems(props) {
  const setSearch = useContext(searchVal);
  const navigate = useNavigate();
  const goToDetail = ()=>{
    setSearch(false);
    let id = props.gameId;
    console.log(id);
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

