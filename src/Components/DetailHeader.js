import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getPlatformsIcon , myStyle , getDate } from './Util_functions';

function DetailHeader(props) {
  return (
    <>
        <div className="img">
            <LazyLoadImage
              src={props.gameDetail.background_image}
              effect='blur'
              placeholderSrc={props.gameDetail.background_image}
              />
            
            {props.gameDetail.metacritic && <span className='metacitric-score' title='Metacritic Score' style={myStyle(props.gameDetail.metacritic)}>{props.gameDetail.metacritic}</span>}
            
          </div>
          <div className="title">
            <h1>{props.gameDetail.name}</h1>
            {props.gameDetail.released && <small className='date'>{getDate(props.gameDetail.released)}</small>}
            {props.gameDetail.parent_platforms?.map((el)=>{
              return <span key={el.platform.id} className='platform'>{getPlatformsIcon(el.platform.slug)}</span>
            })}
              <p className='my-3'>Genre : {props.gameDetail.genres?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Platform : {props.gameDetail.platforms?.map((el)=>{return el.platform.name}).join(' , ')}</p>
              <p>Developers : {props.gameDetail.developers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Publishers : {props.gameDetail.publishers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Available On : {props.gameDetail.stores?.map((el)=>{return el.store.name}).join(' , ')}</p>
              <button type="button" className="btn btn-outline-success btn-sm btn-style">add to library</button>
          </div>
    </>
  )
}

export default DetailHeader