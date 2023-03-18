import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Searchitems.css';

export default class Searchitems extends Component {
  goToDetail = ()=>{
    console.log(this.props.gameId);
  }
  render() {
    let {name , bgImg} = this.props;
    return (
      <>
        <div className='game-list my-1' onClick={this.goToDetail}>
            <div className="game-img">
                {/* <img src={bgImg} alt="" /> */}
                <LazyLoadImage
                  src={bgImg} 
                  height={72}
                  width={56} 
                  effect='blur'
                  placeholderSrc={bgImg}
                  />
            </div>
            <div className="game-title">
                <span className='mx-2'>{name}</span>
            </div>
        </div>
      </>
    )
  }
}
