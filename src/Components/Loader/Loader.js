import React, { Component } from 'react';
import loading from "./loader.gif";
import './Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={loading} alt="loading" />
    </div>
    )
  }
}
