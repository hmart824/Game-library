import React from 'react';
import { ThreeDots } from  'react-loader-spinner';
import loading from "./loader.gif";
import './Loader.css';

export default function Loader() {
    return (
    <div className="loader">
      <img src={loading} alt="loading" />
    </div>
    )
}

export function Miniloader(){
  return (
    <>
      <ThreeDots 
        height="29" 
        width="90" 
        radius="9"
        color="#198754" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  )
}